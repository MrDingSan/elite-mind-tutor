"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaChartLine, FaFlask, FaCheckCircle, FaArrowRight, FaAtom } from 'react-icons/fa';

const chemistryTopics = [
  {
    title: "Atomic Structure",
    description: "Atoms, elements, and the periodic table",
    topics: ["Atomic models", "Electronic configuration", "Periodic trends", "Chemical bonding"]
  },
  {
    title: "Chemical Reactions",
    description: "Stoichiometry, kinetics, and equilibrium",
    topics: ["Balancing equations", "Reaction rates", "Chemical equilibrium", "Acids and bases"]
  },
  {
    title: "Organic Chemistry",
    description: "Carbon compounds and their reactions",
    topics: ["Hydrocarbons", "Functional groups", "Organic reactions", "Polymers"]
  },
  {
    title: "Analytical Chemistry",
    description: "Chemical analysis and laboratory techniques",
    topics: ["Titration", "Spectroscopy", "Chromatography", "Chemical testing"]
  }
];

const chemistryLevels = [
  {
    level: "IGCSE Chemistry",
    description: "Core and Extended level chemistry with practical experiments",
    grades: "A* - G",
    duration: "2 years",
    image: "/images/students/chemistry-tuition.jpg"
  },
  {
    level: "IB Chemistry SL",
    description: "Standard Level IB Chemistry with comprehensive coverage",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/tuition-student-study.jpg"
  },
  {
    level: "IB Chemistry HL",
    description: "Higher Level IB Chemistry with advanced topics and research",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/ib-tuition-group.jpg"
  }
];

const chemistryBenefits = [
  {
    icon: <FaFlask className="h-6 w-6 text-navy" />,
    title: "Laboratory Skills",
    description: "Develop practical laboratory techniques and safety awareness"
  },
  {
    icon: <FaAtom className="h-6 w-6 text-navy" />,
    title: "Scientific Understanding",
    description: "Understand the fundamental principles of matter and reactions"
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-navy" />,
    title: "Career Preparation",
    description: "Essential for medicine, pharmacy, and chemical engineering"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Problem Solving",
    description: "Apply mathematical and analytical skills to chemical problems"
  }
];

export default function ChemistryTuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/chemistry-tuition.jpg"
            alt="Chemistry tuition for IB and IGCSE students"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chemistry Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert Chemistry tutoring for IGCSE and IB students. Master atomic structure, reactions, and organic chemistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Chemistry Tutor
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

      {/* Chemistry Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Chemistry Tuition?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Chemistry is the study of matter and its transformations. Our expert tutors help students understand 
              complex chemical concepts through clear explanations, practical experiments, and real-world applications.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're studying IGCSE or IB Chemistry, our tutors provide personalized guidance to help you 
              develop strong analytical skills and achieve excellent results in this fascinating subject.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Hands-on laboratory experiments and safety training</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Mathematical problem-solving in chemical contexts</span>
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
              alt="Chemistry student conducting experiments"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Chemistry Levels */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chemistry Programs We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Chemistry tutoring for all levels and curricula
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chemistryLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={level.image}
                    alt={`${level.level} chemistry tuition`}
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

      {/* Chemistry Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Chemistry Topics We Cover</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of all major Chemistry topics for IGCSE and IB students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chemistryTopics.map((topic, index) => (
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

      {/* Chemistry Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Chemistry Tuition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why studying Chemistry with our expert tutors makes a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chemistryBenefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Chemistry?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our Chemistry tuition program and discover the fascinating world of chemical sciences with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Chemistry Tuition Today
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Speak to Our Chemistry Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 