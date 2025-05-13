import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);

    if (!data.curriculum) {
      return NextResponse.json(
        { error: 'Curriculum is required' },
        { status: 400 }
      );
    }

    // Create a temporary user for the student if email not provided
    const user = await prisma.user.create({
      data: {
        email: data.email || `temp-${Date.now()}@example.com`,
        name: data.studentName || 'Temporary Student',
        password: 'temporary-password',
        role: 'STUDENT'
      }
    });

    // Create a student record
    const student = await prisma.student.create({
      data: {
        userId: user.id,
        grade: data.studentGrade || '',
        curriculum: data.curriculum,
        subjects: JSON.stringify(data.subjects || [])
      }
    });

    // Create the tutor request
    const tutorRequest = await prisma.tutorRequest.create({
      data: {
        requesterName: data.name || '',
        requesterEmail: data.email || '',
        requesterPhone: data.phone || '',
        requesterRole: data.role || '',
        studentName: data.studentName || '',
        studentGender: data.studentGender || '',
        studentSchool: data.studentSchool || '',
        studentGrade: data.studentGrade || '',
        subjects: JSON.stringify(data.subjects || []),
        curriculum: data.curriculum,
        preferredFrequency: data.preferredFrequency || '',
        preferredDuration: data.preferredDuration || '',
        preferredTutorType: data.preferredTutorType || '',
        address: data.address || '',
        additionalNotes: data.additionalNotes || '',
        status: 'PENDING',
        studentId: student.id
      }
    });

    console.log('Created tutor request:', tutorRequest);
    return NextResponse.json(tutorRequest);
  } catch (error) {
    console.error('Error creating tutor request:', error);
    return NextResponse.json(
      { error: 'Failed to create tutor request' },
      { status: 500 }
    );
  }
} 