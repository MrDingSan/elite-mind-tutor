"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaChartLine, FaCalculator, FaCheckCircle, FaArrowRight, FaBrain } from 'react-icons/fa';

const mathTopics = [
  {
    title: "Algebra",
    description: "Linear and quadratic equations, functions, and algebraic manipulation",
    topics: ["Linear equations", "Quadratic functions", "Polynomials", "Functions and graphs"]
  },
  {
    title: "Geometry",
    description: "Plane and solid geometry, trigonometry, and coordinate geometry",
    topics: ["Pythagoras theorem", "Trigonometry", "Circle geometry", "Vectors"]
  },
  {
    title: "Calculus",
    description: "Differentiation, integration, and their applications",
    topics: ["Derivatives", "Integration", "Applications", "Optimization"]
  },
  {
    title: "Statistics & Probability",
    description: "Data analysis, probability theory, and statistical inference",
    topics: ["Data representation", "Probability", "Statistical tests", "Correlation"]
  }
];

const mathLevels = [
  {
    level: "IGCSE Mathematics",
    description: "Core and Extended level mathematics with comprehensive coverage",
    grades: "A* - G",
    duration: "2 years",
    image: "/images/students/math-tuition.jpg"
  },
  {
    level: "IB Math AA SL",
    description: "Analysis and Approaches Standard Level with focus on analytical skills",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/tuition-student-study.jpg"
  },
  {
    level: "IB Math AA HL",
    description: "Analysis and Approaches Higher Level with advanced calculus and proof",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/ib-tuition-group.jpg"
  },
  {
    level: "IB Math AI SL",
    description: "Applications and Interpretation Standard Level with real-world applications",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/physics-tuition.jpg"
  },
  {
    level: "IB Math AI HL",
    description: "Applications and Interpretation Higher Level with advanced applications",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/private-tutor.jpg"
  }
];

const mathBenefits = [
  {
    icon: <FaCalculator className="h-6 w-6 text-navy" />,
    title: "Problem Solving",
    description: "Develop logical thinking and analytical problem-solving skills"
  },
  {
    icon: <FaBrain className="h-6 w-6 text-navy" />,
    title: "Critical Thinking",
    description: "Learn to think critically and approach problems systematically"
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-navy" />,
    title: "University Preparation",
    description: "Essential foundation for STEM subjects and university studies"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Real-world Applications",
    description: "Understand how mathematics applies to everyday situations"
  }
];

export default function MathTuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/math-tuition.jpg"
            alt="Mathematics tuition for IB and IGCSE students"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mathematics Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert Mathematics tutoring for IGCSE and IB students. Master algebra, geometry, calculus, and statistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Math Tutor
                <FaArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Math Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Mathematics Tuition?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Mathematics is the foundation of many academic disciplines and careers. Our expert tutors help students 
              develop strong mathematical thinking skills through clear explanations, step-by-step problem solving, and practical applications.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're studying IGCSE or IB Mathematics, our tutors provide personalized guidance to help you 
              build confidence and achieve excellent results in this crucial subject.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Step-by-step problem solving techniques</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Conceptual understanding and application</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Exam preparation with past paper practice</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/students/tuition-student-studying.jpg"
              alt="Mathematics student solving problems"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Math Levels */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mathematics Programs We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Mathematics tutoring for all levels and curricula
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mathLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={level.image}
                    alt={`${level.level} mathematics tuition`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{level.level}</h3>
                    <p className="text-white/90 text-sm">{level.grades}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration: {level.duration}</span>
                    <Link
                      href="/request-tutor"
                      className="inline-flex items-center text-navy hover:text-navy-600 font-semibold text-sm"
                    >
                      Enroll Now
                      <FaArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Math Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Mathematics Topics We Cover</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of all major Mathematics topics for IGCSE and IB students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mathTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{topic.title}</h3>
              <p className="text-gray-600 mb-6">{topic.description}</p>
              <div className="space-y-2">
                {topic.topics.map((subtopic, subIndex) => (
                  <div key={subIndex} className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-navy mr-3" />
                    <span className="text-gray-700">{subtopic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Math Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Mathematics Tuition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why studying Mathematics with our expert tutors makes a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mathBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Approach */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/students/ib-tuition-group.jpg"
              alt="Mathematics students working together"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teaching Approach</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaCalculator className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step-by-Step Learning</h3>
                  <p className="text-gray-600">Break down complex problems into manageable steps</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaBrain className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Conceptual Understanding</h3>
                  <p className="text-gray-600">Focus on understanding the 'why' behind mathematical concepts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaChartLine className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice and Application</h3>
                  <p className="text-gray-600">Regular practice with real-world applications and exam questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Mathematics?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our Mathematics tuition program and build a strong foundation for academic and career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Mathematics Tuition Today
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Speak to Our Math Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 