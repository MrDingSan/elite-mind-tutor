"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaCheckCircle } from 'react-icons/fa';

export default function BlogPost() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom1.jpg"
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
                  March 15, 2024
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  Dr. Kevin, Founder of EliteMind Tutor
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                The Ultimate Guide to Choosing an International School in Singapore (2025 Edition)
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-indigo max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Singapore is often called the "education hub of Asia"—and for good reason. With over 50 international schools offering globally recognized curricula such as IB, IGCSE, A-Levels, AP, and more, parents relocating to or living in Singapore are spoiled for choice.
          </p>

          <p className="mb-8">
            But behind the glossy websites and impressive campuses lies a crucial question for every discerning parent:
            Which international school is the right fit for my child?
          </p>

          <p className="mb-8">
            This guide breaks down everything you need to know about international schooling in Singapore—from curriculum choices to admissions processes and key selection criteria.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Who Are International Schools For?</h2>
          <p className="mb-4">International schools in Singapore primarily cater to:</p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Expatriate families working in Singapore</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Local Singaporean families seeking global exposure and overseas university placements</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>"Third culture" children with multi-national backgrounds</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Returning overseas families (e.g., PRC or Hong Kong parents who migrated and returned)</span>
            </li>
          </ul>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
            <p className="text-indigo-700 font-medium">✅ Important Note for Local Families:</p>
            <p className="text-indigo-600">Admission rules vary. Some schools may have restrictions for Singaporean citizens due to MOE regulations. Always check eligibility before applying.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Curriculum Matters: Understanding the Main Systems</h2>
          <p className="mb-6">The curriculum is the first filter when selecting a school. It shapes not only academic content but also how your child learns, thinks, and prepares for university.</p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curriculum</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Features</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Common Schools</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">IB (International Baccalaureate)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Inquiry-based, holistic, globally respected</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Balanced learners aiming for top global universities</td>
                  <td className="px-6 py-4 text-sm text-gray-500">UWCSEA, SJI International, CIS</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">IGCSE + A-Levels</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Subject-specific, academically rigorous</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Students with strong exam skills and UK university goals</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Tanglin Trust, Dover Court</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">American/AP</td>
                  <td className="px-6 py-4 text-sm text-gray-500">GPA-focused, flexible, credit-based</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Students heading to the US</td>
                  <td className="px-6 py-4 text-sm text-gray-500">SAS, Stamford American</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Montessori / Reggio Emilia</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Child-led, developmental (mainly for early years)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Young learners</td>
                  <td className="px-6 py-4 text-sm text-gray-500">EtonHouse, Blue House</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Other National Curricula</td>
                  <td className="px-6 py-4 text-sm text-gray-500">French, German, Japanese, etc.</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Native speakers, expat continuity</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Lycée Français, German European School</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
            <p className="text-yellow-700">🎓 The IB Diploma is the most commonly offered pre-university program in Singapore, and increasingly favored by both US and UK universities.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. What to Look for When Choosing a School</h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">✅ Academic Results & University Placement</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Check IB average scores, A-level grades, AP pass rates</li>
                <li>Look into recent university placement reports (Oxbridge, Ivy League, NUS/NTU)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">✅ Teaching Philosophy</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Rote learning vs. inquiry-based</li>
                <li>Holistic development vs. academic rigor</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">✅ Class Size & Teacher-Student Ratio</h3>
              <p className="text-gray-600">Smaller classes often mean more attention, but larger schools may offer broader co-curricular programs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">✅ School Culture</h3>
              <p className="text-gray-600">Some schools are academically competitive, others emphasize community, service, or innovation. Attend open houses and ask: "Will my child thrive in this environment?"</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">✅ Location & Commute</h3>
              <p className="text-gray-600">Daily travel impacts mood, energy, and family logistics. Consider school bus options or proximity to home/work.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">✅ Tuition Fees</h3>
              <p className="text-gray-600">Expect annual fees from SGD $25,000 to $50,000, excluding extras like uniforms, technology, and camps. Some nonprofit schools (e.g., UWCSEA) offer financial aid or scholarships.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Application & Admissions: What to Expect</h2>
          <p className="mb-6">Most international schools offer rolling admissions, but spaces in top-tier schools are limited—especially for Grades 5–9.</p>
          <p className="mb-4">Common admission steps include:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>Online application (with past report cards and recommendation letters)</li>
            <li>Entrance tests (English, Math, or Cognitive Ability Tests like CAT4)</li>
            <li>Student/parent interviews</li>
            <li>Application fee (non-refundable)</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-blue-700">🧠 Tip: Admissions assessments often reflect the school's curriculum. For example, IB schools may test reasoning more than rote knowledge.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Most Popular International Schools in Singapore</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strengths</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curriculum</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees (Approx.)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">UWCSEA</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Global citizenship, service learning, IB excellence</td>
                  <td className="px-6 py-4 text-sm text-gray-500">IB (K–12)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">SGD 37k–47k</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tanglin Trust</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Academic rigor, UK alignment, strong alumni network</td>
                  <td className="px-6 py-4 text-sm text-gray-500">IGCSE + A-Levels</td>
                  <td className="px-6 py-4 text-sm text-gray-500">SGD 30k–45k</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Singapore American School (SAS)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">World-class facilities, AP-heavy, US focus</td>
                  <td className="px-6 py-4 text-sm text-gray-500">American/AP</td>
                  <td className="px-6 py-4 text-sm text-gray-500">SGD 40k–50k</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stamford American</td>
                  <td className="px-6 py-4 text-sm text-gray-500">IB + AP option, dual-track flexibility</td>
                  <td className="px-6 py-4 text-sm text-gray-500">IB + AP</td>
                  <td className="px-6 py-4 text-sm text-gray-500">SGD 35k–48k</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SJI International</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Values-driven, academic excellence, Jesuit roots</td>
                  <td className="px-6 py-4 text-sm text-gray-500">IB</td>
                  <td className="px-6 py-4 text-sm text-gray-500">SGD 30k–44k</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Canadian International (CIS)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Bilingual program (English-Chinese), global outlook</td>
                  <td className="px-6 py-4 text-sm text-gray-500">IB</td>
                  <td className="px-6 py-4 text-sm text-gray-500">SGD 25k–42k</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Key Trends in 2025: What Parents Should Know</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>IB is dominating: More schools are shifting from A-levels or AP to IB to improve global university acceptance.</li>
            <li>Mandarin bilingualism is rising in demand (e.g., at CIS, EtonHouse).</li>
            <li>Mental health and student well-being are getting more attention—many schools now offer full-time counselors and wellness programs.</li>
            <li>Tech integration is standard. Every student from Grade 4+ is expected to be device-literate.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Final Word: Tailor the School to Your Child</h2>
          <p className="mb-6">Choosing the right international school is not about picking the "best" school—it's about picking the right fit.</p>
          <p className="mb-8">At EliteMind Tutor, we've worked with students from every major international school in Singapore, helping them excel in IB, IGCSE, and entrance tests.</p>

          <div className="bg-indigo-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Need Help Making the Right Choice?</h3>
            <p className="text-indigo-700 mb-4">If you're unsure which school suits your child best—or need help preparing for entrance assessments or academic readiness—reach out to us. We offer one-on-one guidance for:</p>
            <ul className="list-disc pl-6 text-indigo-700">
              <li>Curriculum consultation and subject selection</li>
              <li>Academic readiness and entrance test prep</li>
              <li>IB and IGCSE tutoring by subject specialists</li>
              <li>Personalized education strategy planning for top-tier university applications</li>
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
} 