"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaChartLine, FaGlobe, FaLightbulb, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ibSubjects = [
  {
    name: "Mathematics",
    description: "IB Mathematics (AA & AI) - Analysis and Approaches, Applications and Interpretation",
    levels: ["SL", "HL"],
    image: "/images/students/math-tuition.jpg",
    slug: "math-tuition"
  },
  {
    name: "Physics",
    description: "Comprehensive IB Physics covering mechanics, waves, electricity, and modern physics",
    levels: ["SL", "HL"],
    image: "/images/students/physics-tuition.jpg",
    slug: "physics-tuition"
  },
  {
    name: "Chemistry",
    description: "IB Chemistry with practical laboratory work and theoretical understanding",
    levels: ["SL", "HL"],
    image: "/images/students/chemistry-tuition.jpg",
    slug: "chemistry-tuition"
  },
  {
    name: "Biology",
    description: "IB Biology covering cell biology, genetics, ecology, and human physiology",
    levels: ["SL", "HL"],
    image: "/images/students/biology-tuition.jpg",
    slug: "biology-tuition"
  },
  {
    name: "English",
    description: "IB English Language & Literature with critical analysis and creative writing",
    levels: ["SL", "HL"],
    image: "/images/students/tuition-student-english.jpg",
    slug: "english-tuition"
  },
  {
    name: "Economics",
    description: "IB Economics covering microeconomics, macroeconomics, and international trade",
    levels: ["SL", "HL"],
    image: "/images/students/economics-tuition.jpg",
    slug: "economics-tuition"
  }
];

const ibBenefits = [
  {
    icon: <FaGlobe className="h-6 w-6 text-navy" />,
    title: "Global Recognition",
    description: "IB Diploma is recognized by universities worldwide, including Ivy League and Oxbridge"
  },
  {
    icon: <FaLightbulb className="h-6 w-6 text-navy" />,
    title: "Critical Thinking",
    description: "Develops analytical and research skills essential for university success"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Holistic Education",
    description: "Balanced curriculum covering languages, sciences, humanities, and arts"
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-navy" />,
    title: "University Preparation",
    description: "Prepares students for the academic rigor of top universities"
  }
];

export default function IBTuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/ib-tuition-group.jpg"
            alt="IB students studying together"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IB Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert International Baccalaureate tutoring for students aiming for top universities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request IB Tutor
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

      {/* IB Program Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the IB Diploma Programme?</h2>
            <p className="text-lg text-gray-600 mb-6">
              The International Baccalaureate (IB) Diploma Programme is a rigorous two-year curriculum designed for students aged 16-19. 
              It's recognized by universities worldwide and provides excellent preparation for higher education.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our IB tutors are experienced educators who understand the unique challenges of the IB curriculum and can help students 
              achieve their target grades while developing essential academic skills.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Personalized learning plans tailored to individual needs</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Expert guidance for Extended Essay and Internal Assessments</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Comprehensive exam preparation and past paper practice</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/students/tuition-student-study.jpg"
              alt="IB student studying with tutor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* IB Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose IB Tuition?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The IB Diploma Programme offers unique advantages for university preparation and personal development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ibBenefits.map((benefit, index) => (
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

      {/* IB Subjects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">IB Subjects We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tutoring for all major IB subjects at both Standard Level (SL) and Higher Level (HL)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ibSubjects.map((subject, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={subject.image}
                  alt={`${subject.name} IB tuition`}
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

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in IB?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our IB tuition program and get the expert guidance you need to achieve your target grades and secure university admission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start IB Tuition Today
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