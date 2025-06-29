"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaChartLine, FaGlobe, FaLightbulb, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const igcseSubjects = [
  {
    name: "Mathematics",
    description: "IGCSE Mathematics (Core & Extended) - comprehensive coverage of algebra, geometry, and statistics",
    levels: ["Core", "Extended"],
    image: "/images/students/math-tuition.jpg",
    slug: "math-tuition"
  },
  {
    name: "Physics",
    description: "IGCSE Physics covering mechanics, electricity, waves, and modern physics concepts",
    levels: ["Core", "Extended"],
    image: "/images/students/physics-tuition.jpg",
    slug: "physics-tuition"
  },
  {
    name: "Chemistry",
    description: "IGCSE Chemistry with practical experiments and theoretical understanding",
    levels: ["Core", "Extended"],
    image: "/images/students/chemistry-tuition.jpg",
    slug: "chemistry-tuition"
  },
  {
    name: "Biology",
    description: "IGCSE Biology covering cell biology, genetics, ecology, and human physiology",
    levels: ["Core", "Extended"],
    image: "/images/students/biology-tuition.jpg",
    slug: "biology-tuition"
  },
  {
    name: "English",
    description: "IGCSE English Language & Literature with reading, writing, and speaking skills",
    levels: ["First Language", "Second Language"],
    image: "/images/students/tuition-student-english.jpg",
    slug: "english-tuition"
  },
  {
    name: "Economics",
    description: "IGCSE Economics covering basic economic concepts, market structures, and international trade",
    levels: ["Core", "Extended"],
    image: "/images/students/economics-tuition.jpg",
    slug: "economics-tuition"
  }
];

const igcseBenefits = [
  {
    icon: <FaGlobe className="h-6 w-6 text-navy" />,
    title: "International Recognition",
    description: "IGCSE is recognized by universities and employers worldwide"
  },
  {
    icon: <FaLightbulb className="h-6 w-6 text-navy" />,
    title: "Foundation for A-Levels",
    description: "Excellent preparation for advanced studies and university entrance"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Flexible Curriculum",
    description: "Choose from a wide range of subjects to match your interests and goals"
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-navy" />,
    title: "Practical Skills",
    description: "Develop critical thinking, problem-solving, and research abilities"
  }
];

export default function IGCSETuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/math-tuition.jpg"
            alt="IGCSE students studying mathematics"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IGCSE Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert IGCSE tutoring to help students achieve excellent grades and prepare for advanced studies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request IGCSE Tutor
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

      {/* IGCSE Program Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is IGCSE?</h2>
            <p className="text-lg text-gray-600 mb-6">
              The International General Certificate of Secondary Education (IGCSE) is a globally recognized qualification 
              for students aged 14-16. It's designed to develop students' knowledge, understanding, and skills in a wide range of subjects.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our IGCSE tutors are experienced educators who understand the curriculum requirements and can help students 
              achieve their target grades while building a strong foundation for future academic success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Structured learning approach with clear objectives</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Regular assessments and progress tracking</span>
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
              alt="IGCSE student studying with tutor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* IGCSE Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose IGCSE Tuition?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              IGCSE provides a solid foundation for academic success and future career opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {igcseBenefits.map((benefit, index) => (
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

      {/* IGCSE Subjects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">IGCSE Subjects We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tutoring for all major IGCSE subjects at both Core and Extended levels
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {igcseSubjects.map((subject, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={subject.image}
                  alt={`${subject.name} IGCSE tuition`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{subject.name}</h3>
                  <div className="flex space-x-2">
                    {subject.levels.map((level) => (
                      <span key={level} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{subject.description}</p>
                <Link
                  href={`/${subject.slug}`}
                  className="inline-flex items-center text-navy hover:text-navy-600 font-semibold"
                >
                  Learn More
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grading System */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">IGCSE Grading System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the IGCSE grading system helps set clear academic goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Level (C-G)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">A* - A</span>
                  <span className="font-semibold text-navy">90-100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">B - C</span>
                  <span className="font-semibold text-navy">70-89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">D - E</span>
                  <span className="font-semibold text-navy">50-69%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">F - G</span>
                  <span className="font-semibold text-navy">30-49%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Extended Level (A*-G)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">A*</span>
                  <span className="font-semibold text-navy">90-100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">A</span>
                  <span className="font-semibold text-navy">80-89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">B</span>
                  <span className="font-semibold text-navy">70-79%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">C</span>
                  <span className="font-semibold text-navy">60-69%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in IGCSE?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our IGCSE tuition program and get the expert guidance you need to achieve excellent grades and prepare for advanced studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start IGCSE Tuition Today
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Speak to Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 