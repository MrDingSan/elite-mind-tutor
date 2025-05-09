import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const tutorRequest = await prisma.tutorRequest.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        studentName: data.studentName,
        studentGender: data.studentGender,
        studentSchool: data.studentSchool,
        studentGrade: data.studentGrade,
        subjects: data.subjects,
        curriculum: data.curriculum,
        preferredFrequency: data.preferredFrequency,
        preferredDuration: data.preferredDuration,
        preferredTutorType: data.preferredTutorType,
        address: data.address,
        additionalNotes: data.additionalNotes,
      },
    });

    return NextResponse.json({ success: true, data: tutorRequest });
  } catch (error) {
    console.error('Error creating tutor request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create tutor request' },
      { status: 500 }
    );
  }
} 