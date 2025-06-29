"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaChartLine, FaAtom, FaCheckCircle, FaArrowRight, FaFlask } from 'react-icons/fa';

const physicsTopics = [
  {
    title: "Mechanics",
    description: "Motion, forces, energy, and momentum",
    topics: ["Kinematics", "Dynamics", "Energy conservation", "Momentum"]
  },
  {
    title: "Waves",
    description: "Wave properties, sound, and light",
    topics: ["Wave characteristics", "Sound waves", "Light waves", "Interference"]
  },
  {
    title: "Electricity & Magnetism",
    description: "Electric circuits, fields, and electromagnetic phenomena",
    topics: ["Electric circuits", "Magnetic fields", "Electromagnetic induction", "AC/DC"]
  },
  {
    title: "Modern Physics",
    description: "Quantum physics, nuclear physics, and relativity",
    topics: ["Quantum theory", "Nuclear physics", "Special relativity", "Particle physics"]
  }
];

const physicsLevels = [
  {
    level: "IGCSE Physics",
    description: "Core and Extended level physics with practical experiments",
    grades: "A* - G",
    duration: "2 years",
    image: "/images/students/physics-tuition.jpg"
  },
  {
    level: "IB Physics SL",
    description: "Standard Level IB Physics with comprehensive coverage",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/tuition-student-study.jpg"
  },
  {
    level: "IB Physics HL",
    description: "Higher Level IB Physics with advanced topics and research",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/ib-tuition-group.jpg"
  }
];

const physicsBenefits = [
  {
    icon: <FaAtom className="h-6 w-6 text-navy" />,
    title: "Scientific Thinking",
    description: "Develop analytical and experimental skills"
  },
  {
    icon: <FaFlask className="h-6 w-6 text-navy" />,
    title: "Practical Skills",
    description: "Learn laboratory techniques and experimental design"
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-navy" />,
    title: "Engineering Foundation",
    description: "Essential for engineering and technology careers"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Problem Solving",
    description: "Apply mathematical concepts to real-world problems"
  }
];

export default function PhysicsTuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/physics-tuition.jpg"
            alt="Physics tuition for IB and IGCSE students"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Physics Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert Physics tutoring for IGCSE and IB students. Master mechanics, waves, electricity, and modern physics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Physics Tutor
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

      {/* Physics Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Physics Tuition?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Physics is the fundamental science that explains how the universe works. Our expert tutors help students 
              understand complex physical concepts through clear explanations, practical experiments, and real-world applications.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're studying IGCSE or IB Physics, our tutors provide personalized guidance to help you 
              develop strong analytical skills and achieve excellent results in this challenging subject.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Hands-on laboratory experiments and demonstrations</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Mathematical problem-solving techniques</span>
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
              alt="Physics student conducting experiments"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Physics Levels */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Physics Programs We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Physics tutoring for all levels and curricula
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {physicsLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={level.image}
                    alt={`${level.level} physics tuition`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{level.level}</h3>
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

      {/* Physics Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Physics Topics We Cover</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of all major Physics topics for IGCSE and IB students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {physicsTopics.map((topic, index) => (
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

      {/* Physics Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Physics Tuition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why studying Physics with our expert tutors makes a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {physicsBenefits.map((benefit, index) => (
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
              alt="Physics students working together"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teaching Approach</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaAtom className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Conceptual Understanding</h3>
                  <p className="text-gray-600">Build deep understanding of physical principles</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaFlask className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Experiments</h3>
                  <p className="text-gray-600">Hands-on learning through laboratory work</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaChartLine className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Solving</h3>
                  <p className="text-gray-600">Develop analytical and mathematical skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Physics?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our Physics tuition program and discover the fascinating world of physical sciences with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Physics Tuition Today
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Speak to Our Physics Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 