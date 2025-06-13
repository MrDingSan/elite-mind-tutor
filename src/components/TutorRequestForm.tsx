'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { ApiResponse, TutorRequestResponse } from '@/types/api';

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  phone: z.string().optional(),
  role: z.enum(["STUDENT", "PARENT", "OTHER"]).optional().or(z.literal('')),
  studentName: z.string().optional(),
  studentGender: z.enum(["MALE", "FEMALE"]).optional().or(z.literal('')),
  studentSchool: z.string().optional(),
  studentGrade: z.string().optional(),
  subjects: z.array(z.string()).optional(),
  curriculum: z.enum(['IGCSE', 'IB']),
  preferredFrequency: z.string().optional(),
  preferredDuration: z.string().optional(),
  preferredTutorType: z.string().optional(),
  address: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function TutorRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    shouldUnregister: false,
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log('Submitting form data:', data);
      
      // Ensure curriculum is selected
      if (!data.curriculum) {
        throw new Error('Please select a curriculum');
      }

      // Transform the data to match the API's expected format
      const apiData = {
        requesterName: data.name || '',
        requesterEmail: data.email || '',
        requesterPhone: data.phone || '',
        requesterRole: data.role || '',
        studentName: data.studentName || '',
        studentGender: data.studentGender || '',
        studentSchool: data.studentSchool || '',
        studentGrade: data.studentGrade || '',
        subjects: data.subjects || [],
        curriculum: data.curriculum,
        preferredFrequency: data.preferredFrequency || '',
        preferredDuration: data.preferredDuration || '',
        preferredTutorType: data.preferredTutorType || '',
        address: data.address || '',
        additionalNotes: data.additionalNotes || ''
      };

      const response = await fetch('/api/tutor-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(apiData),
        credentials: 'same-origin'
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.status === 405) {
        throw new Error('Method not allowed. Please ensure the API endpoint is properly configured.');
      }

      const responseText = await response.text();
      console.log('Raw response text:', responseText);

      if (!responseText) {
        throw new Error('Empty response from server');
      }

      let result: ApiResponse<TutorRequestResponse>;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse response:', e);
        throw new Error(`Invalid JSON response: ${responseText}`);
      }

      if (!response.ok) {
        const errorMessage = result.error || `Server error: ${response.status}`;
        console.error('Server error:', errorMessage);
        throw new Error(errorMessage);
      }

      if (!result.success) {
        console.error('Request failed:', result);
        throw new Error(result.message || 'Request failed');
      }

      if (!result.data) {
        console.error('No data in response:', result);
        throw new Error('No data in response');
      }

      console.log('Success:', result.data);
      router.push('/request-tutor/success');
    } catch (error: any) {
      console.error('Form submission error:', error);
      alert(`Error: ${error.message}\n\nPlease check the browser console for more details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Contact Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input type="text" {...register('name')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" {...register('email')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel" {...register('phone')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
              <select {...register('role')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy">
                <option value="">Select...</option>
                <option value="STUDENT">Student</option>
                <option value="PARENT">Parent</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Student Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Student Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student's Name</label>
              <input type="text" {...register('studentName')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student's Gender</label>
              <select {...register('studentGender')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy">
                <option value="">Select...</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student's School</label>
              <input type="text" {...register('studentSchool')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grade/Level</label>
              <input type="text" {...register('studentGrade')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
            </div>
          </div>
        </div>

        {/* Academic Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Academic Information</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Curriculum</label>
              <select {...register('curriculum')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy">
                <option value="">Select...</option>
                <option value="IGCSE">IGCSE</option>
                <option value="IB">IB</option>
              </select>
              {errors.curriculum && <p className="mt-2 text-sm text-red-600">{errors.curriculum.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Subjects</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Economics'].map((subject) => (
                  <label key={subject} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-navy cursor-pointer">
                    <input type="checkbox" value={subject} {...register('subjects')} className="h-4 w-4 rounded border-gray-300 text-navy focus:ring-navy" />
                    <span className="text-sm text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tutoring Preferences Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Tutoring Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Frequency</label>
              <select {...register('preferredFrequency')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy">
                <option value="">Select...</option>
                <option value="Once a week">Once a week</option>
                <option value="Twice a week">Twice a week</option>
                <option value="Three times a week">Three times a week</option>
                <option value="More">More</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Duration</label>
              <select {...register('preferredDuration')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy">
                <option value="">Select...</option>
                <option value="1 hour">1 hour</option>
                <option value="1.5 hours">1.5 hours</option>
                <option value="2 hours">2 hours</option>
                <option value="More">More</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Tutor Type</label>
              <select {...register('preferredTutorType')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy">
                <option value="">Select...</option>
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input type="text" {...register('address')} className="block w-full h-11 px-4 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Information</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea {...register('additionalNotes')} rows={4} className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-navy focus:ring-navy" />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 text-base font-medium text-white bg-navy rounded-lg hover:bg-navy-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy disabled:opacity-50 transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
}
