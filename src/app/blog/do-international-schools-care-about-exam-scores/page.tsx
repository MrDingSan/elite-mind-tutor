"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaCheckCircle } from 'react-icons/fa';

const BlogPost = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom2.jpg"
            alt="International School Classroom"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 text-sm text-indigo-100 mb-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  June 17, 2025
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  Kevin Ling — Private Math Tutor with 13 Years of Experience
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Do International Schools Really Care About Exam Scores?
              </h1>
              <p className="text-xl text-indigo-100">
                A Singapore Tutor's Perspective on Why Learning Feels So Different – and What Parents Can Do
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-indigo max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">🎯 What Every Singapore Parent Asks Me</h2>
          <p className="mb-4"><i>"My child says the teacher didn't teach anything."</i></p>
          <p className="mb-4"><i>"There's no math exam next week?"</i></p>
          <p className="mb-4"><i>"Are they even preparing for the IB or IGCSE?"</i></p>
          <p className="mb-6">These are real questions I hear constantly as a private math tutor in Singapore, working with international school students from UWCSEA, Dulwich, Canadian International, and more.</p>
          <p className="mb-6">If you're a parent used to local MOE schools or traditional Chinese education, international schools can feel… confusing.</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>No weekly tests</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>No clear class ranking</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Kids come home saying, <i>"We had to read it ourselves."</i></span>
            </li>
          </ul>
          <p className="mb-8">You're not wrong to feel concerned. But there's a deeper structure behind this — one that affects how you should approach tuition, academic tracking, and long-term development.</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">🧩 Why It Feels Like They're Not Teaching Exam Skills</h2>
          <p className="mb-6">As a Singapore tutor, I've seen this dozens of times:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>A student is told to read a science chapter before class.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>In class, the teacher runs a discussion instead of a lecture.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>The student gets lost — and tells their parents, <i>"Teacher didn't teach."</i></span>
            </li>
          </ul>
          <p className="mb-6">This is called a flipped classroom — a model where content is reviewed at home, and class time is used for active learning.</p>
          <p className="mb-6"><i>"But my child needs explanations. Isn't that what tuition or teachers are for?"</i></p>
          <p className="mb-6">Exactly. That's why many students end up needing private tuition, especially in math — because this model assumes independence, which not every child has yet.</p>
          <p className="mb-8">And this isn't just math. It's across subjects — and it leaves parents asking…</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">❓ So... Do They Even Care About Scores?</h2>
          <p className="mb-6">Yes — but not in the way you think.</p>
          <p className="mb-6">International schools do prepare students for exams like IB, IGCSE, and A-Levels. In fact, top-tier schools in Singapore regularly post excellent results.</p>
          <p className="mb-6">But here's the catch:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They don't teach to the test week-by-week.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They measure skills like critical thinking, collaboration, and research.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They expect students to manage long-term projects instead of last-minute cramming.</span>
            </li>
          </ul>
          <p className="mb-8">As a Singapore math tutor, I've had to redesign my tuition plans just to help students connect classroom inquiry with exam strategy — because the link isn't always clear to them.</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">🧱 What International Schools Actually Emphasize</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional Singapore Schools</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">International Schools</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Weekly tests, timed drills</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Project-based, discussion-driven</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Grades and rankings</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Rubrics, portfolios, teacher feedback</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Exam-centric tuition</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Inquiry-led learning, real-world applications</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Clear metrics and structures</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Broader skill development</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">📉 If Not Grades, Then How Do You Know They're Improving?</h2>
          <p className="mb-6">As a math tutor in Singapore, this is the most common anxiety I see from parents:</p>
          <p className="mb-6"><i>"If I don't see scores or test papers, how do I know my child is improving?"</i></p>
          <p className="mb-6">Here's how international schools measure growth:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>📁 Portfolios & Projects</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>📈 Rubrics & Criteria</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>🎤 Student-Led Conferences</span>
            </li>
          </ul>
          <p className="mb-8">These are powerful but foreign to most local families. That's why private tuition sometimes becomes the bridge — not just for knowledge, but for clarity.</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">🎓 Why Many Students Still Struggle – and Why Tuition Matters</h2>
          <p className="mb-6">Here's what I see as a tutor in Singapore international schools:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Students don't know how to self-learn from slides — so the flipped model fails.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Math lessons become too "open-ended," and exam techniques are lost.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Group projects make it unclear who's really learning.</span>
            </li>
          </ul>
          <p className="mb-6">As a math tutor, I often provide structured tuition to help students:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Understand IB/IGCSE math concepts</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Prepare for exams with past paper strategy</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Build back the confidence they lost in unstructured learning</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">👨‍👩‍👧 Is This Model Right for Every Family?</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Fit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Might Struggle Without Support</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Parents who value inquiry & flexibility</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Parents who want constant test data</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Kids who are independent, self-motivated</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Kids who need direct teaching & repetition</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500">Families with time to engage in learning</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Busy households that rely on school alone</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">🧭 What Should Parents Do?</h2>
          <p className="mb-6">Here's my advice — both as a tutor and someone who works with many international school families:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>✅ 1. Don't Panic at the Lack of Tests</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>✅ 2. Use Tuition to Build Clarity</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>✅ 3. Track Real Progress</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>✅ 4. Be Involved, But Not Overbearing</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">🧮 Final Thought</h2>
          <p className="mb-6">International schools in Singapore may not look <i>"exam-oriented"</i> on the surface — but they do care about results.</p>
          <p className="mb-6">They just take a longer-term, more holistic path — and that requires a mindset shift.</p>
          <p className="mb-6">As a Singapore private tutor, I help families bridge this gap — especially when students feel lost in the system's freedom.</p>
          <p className="mb-8">So if you're wondering whether your child is learning <i>"enough,"</i> the answer is likely yes — but not in the way you're used to. With the right support and understanding, they can succeed in both exams and life beyond school.</p>

          <div className="bg-indigo-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Need Help Understanding Your Child's Progress?</h3>
            <p className="text-indigo-700 mb-4">As an experienced tutor in Singapore, I can help you:</p>
            <ul className="list-disc pl-6 text-indigo-700">
              <li>Understand your child's academic development</li>
              <li>Bridge any gaps in learning</li>
              <li>Prepare for major examinations</li>
              <li>Develop effective study strategies</li>
            </ul>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Contact Us for Personalized Guidance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 