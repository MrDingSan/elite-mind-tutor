'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  role: z.enum(['Parent', 'Guardian', 'Student']),
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  studentGender: z.enum(['Male', 'Female']),
  studentSchool: z.string().optional(),
  studentGrade: z.string().min(1, 'Please select a grade'),
  subjects: z.array(z.string()).min(1, 'Please select at least one subject'),
  curriculum: z.enum(['IGCSE', 'IB']),
  preferredFrequency: z.string().min(1, 'Please select frequency'),
  preferredDuration: z.string().min(1, 'Please select duration'),
  preferredTutorType: z.string().min(1, 'Please select tutor type'),
  address: z.string().min(1, 'Please enter your address'),
  additionalNotes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function TutorRequestForm() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/tutor-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle success
      alert('Form submitted successfully! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
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
                    <span className="ml-2 text-sm text-gray-700">{subject}</span>
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
                <option value="1">1 Lesson Per Week</option>
                <option value="2">2 Lessons Per Week</option>
                <option value="3">3 Lessons Per Week</option>
                <option value="4">4+ Lessons Per Week</option>
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
                <option value="1.5">1.5 Hours</option>
                <option value="2">2 Hours</option>
                <option value="2.5">2.5 Hours</option>
                <option value="3">3 Hours</option>
              </select>
              {errors.preferredDuration && <p className="mt-1 text-sm text-red-600">{errors.preferredDuration.message}</p>}
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Tutor Type</label>
              <select
                {...register('preferredTutorType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                <option value="Part-Time">Part-Time Tutor ($25-$35/hr)</option>
                <option value="Full-Time">Full-Time Tutor ($35-$50/hr)</option>
                <option value="MOE">Ex-/Current MOE Teacher ($70-$80/hr)</option>
              </select>
              {errors.preferredTutorType && <p className="mt-1 text-sm text-red-600">{errors.preferredTutorType.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                {...register('address')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                {...register('additionalNotes')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </motion.div>
        )}

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Previous
            </button>
          )}
          
          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Request
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 