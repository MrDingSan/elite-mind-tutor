import { prisma } from '@/lib/prisma';

// Add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

interface TutorRequestData {
  requesterName: string;
  requesterEmail: string;
  requesterPhone: string;
  requesterRole: string;
  studentName: string;
  studentGender: string;
  studentSchool?: string;
  studentGrade: string;
  subjects: string[];
  curriculum: string;
  preferredFrequency: string;
  preferredDuration: string;
  preferredTutorType: string;
  address: string;
  additionalNotes?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as TutorRequestData;
    
    // First, try to find an existing student with the given email
    const existingUser = await prisma.user.findUnique({
      where: { email: body.requesterEmail },
      include: { student: true }
    });

    let studentId: string;

    if (existingUser?.student) {
      // Use existing student
      studentId = existingUser.student.id;
    } else {
      // Create new student
      const newStudent = await prisma.student.create({
        data: {
          grade: body.studentGrade || '',
          curriculum: body.curriculum,
          subjects: JSON.stringify(body.subjects || []),
          user: {
            create: {
              email: body.requesterEmail || '',
              name: body.requesterName || '',
              password: '', // This will be set later when the user registers
              role: 'STUDENT'
            }
          }
        }
      });
      studentId = newStudent.id;
    }

    // Create the tutor request
    const tutorRequest = await prisma.tutorRequest.create({
      data: {
        requesterName: body.requesterName || '',
        requesterEmail: body.requesterEmail || '',
        requesterPhone: body.requesterPhone || '',
        requesterRole: body.requesterRole || '',
        studentName: body.studentName || '',
        studentGender: body.studentGender || '',
        studentSchool: body.studentSchool || '',
        studentGrade: body.studentGrade || '',
        subjects: JSON.stringify(body.subjects || []),
        curriculum: body.curriculum,
        preferredFrequency: body.preferredFrequency || '',
        preferredDuration: body.preferredDuration || '',
        preferredTutorType: body.preferredTutorType || '',
        address: body.address || '',
        additionalNotes: body.additionalNotes || '',
        status: 'PENDING',
        studentId: studentId
      }
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Tutor request submitted successfully',
      data: tutorRequest 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error('Error submitting tutor request:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Failed to submit tutor request',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
}

// Dynamic runtime export for edge compatibility
// eslint-disable-next-line
// @ts-ignore
if (process.env.NEXT_RUNTIME === "edge") {
  Object.defineProperty(exports, "runtime", { value: "edge" });
} 