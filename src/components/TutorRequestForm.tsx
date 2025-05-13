'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().optional(),
  role: z.enum(['Parent', 'Guardian', 'Student']).optional(),
  studentName: z.string().optional(),
  studentGender: z.enum(['Male', 'Female']).optional(),
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
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form submission started with data:', data);
    setIsSubmitting(true);
    
    try {
      console.log('Sending request to API...');
      const response = await fetch('/api/tutor-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('API Response status:', response.status);
      const result = await response.json();
      console.log('API Response data:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      console.log('Form submitted successfully, redirecting...');
      router.push('/request-tutor/success');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Find Your Perfect Tutor</h2>
        <p className="text-center text-gray-600">Fill out the form below and we'll match you with the right tutor</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                {...register('name')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                {...register('phone')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">I am a</label>
              <select
                {...register('role')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="Parent">Parent</option>
                <option value="Guardian">Guardian</option>
                <option value="Student">Student</option>
              </select>
              {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Student's Name</label>
              <input
                type="text"
                {...register('studentName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.studentName && <p className="mt-1 text-sm text-red-600">{errors.studentName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Student's Gender</label>
              <select
                {...register('studentGender')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.studentGender && <p className="mt-1 text-sm text-red-600">{errors.studentGender.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Student's School</label>
              <input
                type="text"
                {...register('studentSchool')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Grade/Level</label>
              <input
                type="text"
                {...register('studentGrade')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.studentGrade && <p className="mt-1 text-sm text-red-600">{errors.studentGrade.message}</p>}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Curriculum</label>
              <select
                {...register('curriculum')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="IGCSE">IGCSE</option>
                <option value="IB">IB</option>
              </select>
              {errors.curriculum && <p className="mt-1 text-sm text-red-600">{errors.curriculum.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subjects</label>
              <div className="mt-2 space-y-2">
                {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Economics'].map((subject) => (
                  <label key={subject} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value={subject}
                      {...register('subjects')}
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <span className="ml-2">{subject}</span>
                  </label>
                ))}
              </div>
              {errors.subjects && <p className="mt-1 text-sm text-red-600">{errors.subjects.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Frequency</label>
              <select
                {...register('preferredFrequency')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="Once a week">Once a week</option>
                <option value="Twice a week">Twice a week</option>
                <option value="Three times a week">Three times a week</option>
                <option value="More">More</option>
              </select>
              {errors.preferredFrequency && <p className="mt-1 text-sm text-red-600">{errors.preferredFrequency.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Duration</label>
              <select
                {...register('preferredDuration')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="1 hour">1 hour</option>
                <option value="1.5 hours">1.5 hours</option>
                <option value="2 hours">2 hours</option>
                <option value="More">More</option>
              </select>
              {errors.preferredDuration && <p className="mt-1 text-sm text-red-600">{errors.preferredDuration.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Tutor Type</label>
              <select
                {...register('preferredTutorType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
                <option value="Both">Both</option>
              </select>
              {errors.preferredTutorType && <p className="mt-1 text-sm text-red-600">{errors.preferredTutorType.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                {...register('address')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                {...register('additionalNotes')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </motion.div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              disabled={isSubmitting}
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              disabled={isSubmitting}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 