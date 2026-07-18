import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const accounts = await prisma.account.findMany();
    const tasks = await prisma.task.findMany();
    const podcasts = await prisma.podcast.findMany();
    const logs = await prisma.log.findMany();
    const notifications = await prisma.notification.findMany();
    const policies = await prisma.policy.findMany();

    return NextResponse.json({
      success: true,
      data: {
        accounts,
        tasks,
        podcasts,
        logs,
        notifications,
        policies
      }
    });
  } catch (error) {
    console.error('Sync GET error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { collection, data } = await request.json();

    if (collection === 'podcasts') {
      for (const pod of data) {
        await prisma.podcast.upsert({
          where: { id: pod.id },
          update: pod,
          create: pod
        });
      }
    } else if (collection === 'tasks') {
      for (const task of data) {
        await prisma.task.upsert({
          where: { id: task.id },
          update: task,
          create: task
        });
      }
    } else if (collection === 'notifications') {
      for (const notif of data) {
        await prisma.notification.upsert({
          where: { id: notif.id },
          update: notif,
          create: notif
        });
      }
    } else if (collection === 'accounts') {
       for (const acc of data) {
        await prisma.account.upsert({
          where: { email: acc.email },
          update: acc,
          create: acc
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Sync POST error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
