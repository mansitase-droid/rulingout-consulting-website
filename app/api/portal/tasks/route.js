import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json({ success: true, tasks });
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newTask = await prisma.task.create({
      data
    });
    return NextResponse.json({ success: true, task: newTask });
  } catch (error) {
    console.error('Failed to create task:', error);
    return NextResponse.json({ success: false, message: 'Failed to create task' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ success: false, message: 'Task ID required' }, { status: 400 });

    const updatedTask = await prisma.task.update({
      where: { id },
      data
    });
    return NextResponse.json({ success: true, task: updatedTask });
  } catch (error) {
    console.error('Failed to update task:', error);
    return NextResponse.json({ success: false, message: 'Failed to update task' }, { status: 500 });
  }
}
