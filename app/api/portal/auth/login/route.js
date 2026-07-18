import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email and password are required' }, { status: 400 });
    }

    // In a real app, passwords should be hashed and compared using bcrypt
    // For this prototype migration, we match the existing plaintext behavior
    const user = await prisma.account.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (user && user.password === password) {
      if (user.status === 'inactive') {
        return NextResponse.json({ success: false, message: 'Your account has been deactivated. Please contact system admin.' });
      }

      // Update lastLogin timestamp
      const now = new Date();
      const timeString = `${now.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}, ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
      
      await prisma.account.update({
        where: { email: email.toLowerCase() },
        data: { lastLogin: timeString }
      });

      // We send back the session object
      return NextResponse.json({
        success: true,
        session: {
          email: user.email,
          name: user.name,
          role: user.role,
          roleType: user.roleType,
          status: user.status,
          organization: user.organization
        }
      });
    }

    return NextResponse.json({ success: false, message: 'Invalid email or password.' });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
