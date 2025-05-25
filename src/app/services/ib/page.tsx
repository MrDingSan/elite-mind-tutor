import React from 'react';
import { FaGraduationCap, FaChartLine, FaUsers, FaBook, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function IBServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              IB Curriculum Tutoring
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Expert guidance for International Baccalaureate students in Singapore
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
                  <span>Comprehensive coverage of all IB subjects</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Expert guidance for Extended Essays and TOK</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>CAS project support and planning</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Internal Assessment preparation</span>
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
              <h3 className="text-xl font-semibold mb-4">Group 1: Studies in Language and Literature</h3>
              <ul className="space-y-2">
                <li>English A: Language and Literature</li>
                <li>English A: Literature</li>
                <li>Chinese A: Language and Literature</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Group 2: Language Acquisition</h3>
              <ul className="space-y-2">
                <li>English B</li>
                <li>Chinese B</li>
                <li>Spanish B</li>
                <li>French B</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Group 3: Individuals and Societies</h3>
              <ul className="space-y-2">
                <li>Business Management</li>
                <li>Economics</li>
                <li>History</li>
                <li>Psychology</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Group 4: Sciences</h3>
              <ul className="space-y-2">
                <li>Biology</li>
                <li>Chemistry</li>
                <li>Physics</li>
                <li>Computer Science</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Group 5: Mathematics</h3>
              <ul className="space-y-2">
                <li>Mathematics: Analysis and Approaches</li>
                <li>Mathematics: Applications and Interpretation</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Group 6: The Arts</h3>
              <ul className="space-y-2">
                <li>Visual Arts</li>
                <li>Music</li>
                <li>Film</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Core Components Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaBook className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Theory of Knowledge (TOK)</h3>
              <p className="text-gray-600">
                Expert guidance in developing critical thinking skills and understanding knowledge frameworks.
                Support for TOK presentations and essays.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaUsers className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">CAS (Creativity, Activity, Service)</h3>
              <p className="text-gray-600">
                Assistance in planning and documenting CAS experiences.
                Guidance on project development and reflection.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <FaGraduationCap className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Extended Essay</h3>
              <p className="text-gray-600">
                Comprehensive support in research methodology, writing, and editing.
                Regular feedback and guidance throughout the process.
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
                Average improvement of 2-3 points in predicted grades
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
            Ready to Excel in IB?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of successful IB students and get the support you need to achieve your goals.
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