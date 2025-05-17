interface Env {
  DB: D1Database;
}

interface TutorRequestData {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  studentName?: string;
  studentGender?: string;
  studentSchool?: string;
  studentGrade?: string;
  subjects?: string[];
  curriculum: string;
  preferredFrequency?: string;
  preferredDuration?: string;
  preferredTutorType?: string;
  address?: string;
  additionalNotes?: string;
}

interface TutorRequestResponse {
  id: number;
  requesterName: string;
  requesterEmail: string;
  requesterPhone: string;
  requesterRole: string;
  studentName: string;
  studentGender: string;
  studentSchool: string;
  studentGrade: string;
  subjects: string[];
  curriculum: string;
  preferredFrequency: string;
  preferredDuration: string;
  preferredTutorType: string;
  address: string;
  additionalNotes: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface TutorRequestResult {
  id: number;
  requesterName: string;
  requesterEmail: string;
  requesterPhone: string;
  requesterRole: string;
  studentName: string;
  studentGender: string;
  studentSchool: string;
  studentGrade: string;
  subjects: string;
  curriculum: string;
  preferredFrequency: string;
  preferredDuration: string;
  preferredTutorType: string;
  address: string;
  additionalNotes: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  studentId: number;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Content-Type': 'application/json'
  };

  try {
    console.log('=== Request Start ===');
    console.log('Method:', context.request.method);
    console.log('URL:', context.request.url);
    console.log('Headers:', Object.fromEntries(context.request.headers.entries()));

    // Handle OPTIONS request for CORS
    if (context.request.method === 'OPTIONS') {
      console.log('Handling OPTIONS request');
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    // Only allow POST requests
    if (context.request.method !== 'POST') {
      console.log('Method not allowed:', context.request.method);
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: corsHeaders
      });
    }

    const rawBody = await context.request.text();
    console.log('Raw request body:', rawBody);
    
    if (!rawBody) {
      console.error('Empty request body');
      return new Response(JSON.stringify({ error: 'Request body is required' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    let data: TutorRequestData;
    try {
      data = JSON.parse(rawBody);
      console.log('Parsed request data:', data);
    } catch (e) {
      console.error('JSON parse error:', e);
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    if (!data.curriculum) {
      console.error('Curriculum missing');
      return new Response(
        JSON.stringify({ error: 'Curriculum is required' }),
        { 
          status: 400,
          headers: corsHeaders
        }
      );
    }

    console.log('Creating user...');
    // Create a temporary user for the student if email not provided
    const userResult = await context.env.DB.prepare(`
      INSERT INTO User (email, name, password, role)
      VALUES (?, ?, ?, ?)
      RETURNING id
    `).bind(
      data.email || `temp-${Date.now()}@example.com`,
      data.studentName || 'Temporary Student',
      'temporary-password',
      'STUDENT'
    ).first();

    if (!userResult) {
      console.error('Failed to create user');
      throw new Error('Failed to create user');
    }
    console.log('User created:', userResult);

    console.log('Creating student...');
    // Create a student record
    const studentResult = await context.env.DB.prepare(`
      INSERT INTO Student (userId, grade, curriculum, subjects)
      VALUES (?, ?, ?, ?)
      RETURNING id
    `).bind(
      userResult.id,
      data.studentGrade || '',
      data.curriculum,
      JSON.stringify(data.subjects || [])
    ).first();

    if (!studentResult) {
      console.error('Failed to create student');
      throw new Error('Failed to create student');
    }
    console.log('Student created:', studentResult);

    console.log('Creating tutor request...');
    // Create the tutor request
    const tutorRequestResult = await context.env.DB.prepare(`
      INSERT INTO TutorRequest (
        requesterName, requesterEmail, requesterPhone, requesterRole,
        studentName, studentGender, studentSchool, studentGrade,
        subjects, curriculum, preferredFrequency, preferredDuration,
        preferredTutorType, address, additionalNotes, status, studentId
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING *
    `).bind(
      data.name || '',
      data.email || '',
      data.phone || '',
      data.role || '',
      data.studentName || '',
      data.studentGender || '',
      data.studentSchool || '',
      data.studentGrade || '',
      JSON.stringify(data.subjects || []),
      data.curriculum,
      data.preferredFrequency || '',
      data.preferredDuration || '',
      data.preferredTutorType || '',
      data.address || '',
      data.additionalNotes || '',
      'PENDING',
      studentResult.id
    ).first() as TutorRequestResult;

    if (!tutorRequestResult) {
      console.error('Failed to create tutor request');
      throw new Error('Failed to create tutor request');
    }
    console.log('Tutor request created:', tutorRequestResult);

    const response: TutorRequestResponse = {
      ...tutorRequestResult,
      subjects: JSON.parse(tutorRequestResult.subjects),
      createdAt: new Date(tutorRequestResult.createdAt).toISOString(),
      updatedAt: new Date(tutorRequestResult.updatedAt).toISOString(),
      studentSchool: tutorRequestResult.studentSchool || '',
      studentGender: tutorRequestResult.studentGender || '',
      preferredFrequency: tutorRequestResult.preferredFrequency || '',
      preferredDuration: tutorRequestResult.preferredDuration || '',
      preferredTutorType: tutorRequestResult.preferredTutorType || '',
      address: tutorRequestResult.address || '',
      additionalNotes: tutorRequestResult.additionalNotes || '',
    };

    console.log('Sending response:', response);
    console.log('=== Request End ===');

    return new Response(
      JSON.stringify({ data: response }),
      { 
        status: 200,
        headers: corsHeaders
      }
    );
  } catch (error) {
    console.error('=== Error ===');
    console.error('Error details:', error);
    console.error('=== Error End ===');

    return new Response(
      JSON.stringify({ 
        error: 'Failed to create tutor request: ' + (error instanceof Error ? error.message : 'Unknown error'),
        details: error instanceof Error ? error.stack : undefined
      }),
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}; 