import React from 'react';
import { FaGraduationCap, FaChartLine, FaUsers, FaBook, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function IGCSEservices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              IGCSE Curriculum Tutoring
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Expert guidance for Cambridge IGCSE students in Singapore
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Program Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Comprehensive coverage of all IGCSE subjects</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Expert guidance for coursework and practical assessments</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Exam preparation and past paper practice</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Study skills and time management training</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Personalized learning plans tailored to each student</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Regular progress tracking and feedback</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Small group and one-on-one sessions available</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subject Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Subject Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li>English First Language</li>
                <li>English Second Language</li>
                <li>Chinese First Language</li>
                <li>Chinese Second Language</li>
                <li>French</li>
                <li>Spanish</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Sciences</h3>
              <ul className="space-y-2">
                <li>Biology</li>
                <li>Chemistry</li>
                <li>Physics</li>
                <li>Combined Science</li>
                <li>Environmental Management</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Mathematics</h3>
              <ul className="space-y-2">
                <li>Mathematics (Core)</li>
                <li>Mathematics (Extended)</li>
                <li>Additional Mathematics</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Humanities</h3>
              <ul className="space-y-2">
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Geography</li>
                <li>History</li>
                <li>Global Perspectives</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Creative & Technical</h3>
              <ul className="space-y-2">
                <li>Art & Design</li>
                <li>Computer Science</li>
                <li>Information Technology</li>
                <li>Design & Technology</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaBook className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                In-depth coverage of all syllabus topics with emphasis on exam techniques and practical skills.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaUsers className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Experienced Tutors</h3>
              <p className="text-gray-600">
                Our tutors are Cambridge-trained educators with proven track records of student success.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaGraduationCap className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Exam Preparation</h3>
              <p className="text-gray-600">
                Regular mock exams, past paper practice, and detailed feedback to ensure exam readiness.
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Our Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaChartLine className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grade Improvement</h3>
              <p className="text-gray-600">
                Average improvement of 2-3 grades in final results
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaClock className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Available 7 days a week, including evenings and weekends
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FaUsers className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Satisfaction</h3>
              <p className="text-gray-600">
                95% of students report improved confidence and understanding
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Ready to Excel in IGCSE?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of successful IGCSE students and get the support you need to achieve your goals.
          </p>
          <a
            href="/request-tutor"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request a Tutor
          </a>
        </div>
      </div>
    </div>
  );
} 