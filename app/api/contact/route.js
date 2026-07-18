import { NextResponse } from 'next/server';

// In-memory rate limiting for the contact form
const contactRateLimitStore = new Map();

export async function POST(req) {
  try {
    // 1. Basic Rate Limiting by IP (or pseudo-IP since we don't have direct access in all environments)
    const ip = req.headers.get('x-forwarded-for') || 'anonymous-contact';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    
    if (contactRateLimitStore.has(ip)) {
      const lastRequestTime = contactRateLimitStore.get(ip);
      if (now - lastRequestTime < windowMs) {
        return NextResponse.json(
          { error: 'You are submitting forms too quickly. Please wait a minute.' },
          { status: 429 }
        );
      }
    }
    contactRateLimitStore.set(ip, now);

    // 2. Parse the request body
    const body = await req.json();
    const { name, email, phone, queryType } = body;

    // 3. Validate required base fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Please fill out all core contact fields (Name, Email, Phone).' },
        { status: 400 }
      );
    }

    // 4. Send Data to Webhook (Make.com or Zapier)
    const WEBHOOK_URL = 'https://hook.us2.make.com/mxaiufkg133a5eqozpwhibjqlqx1j39b';
    
    const payload = {
      source: "Contact Form",
      queryType: queryType || 'Unknown',
      lead: { ...body }, // Pass all dynamic fields
      timestamp: new Date().toISOString()
    };

    // Fire and forget
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(err => console.error("Webhook Error:", err));

    // 5. Return success
    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
