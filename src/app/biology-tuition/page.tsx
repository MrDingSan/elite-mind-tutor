"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaBook, FaChartLine, FaUsers, FaAward, FaMicroscope, FaCheckCircle, FaArrowRight, FaFlask } from 'react-icons/fa';

const biologyTopics = [
  {
    title: "Cell Biology",
    description: "Cell structure, cell division, and cellular processes",
    topics: ["Cell theory", "Cell organelles", "Mitosis and meiosis", "Cell transport"]
  },
  {
    title: "Genetics",
    description: "Inheritance patterns, DNA structure, and genetic engineering",
    topics: ["Mendelian genetics", "DNA replication", "Gene expression", "Genetic disorders"]
  },
  {
    title: "Ecology",
    description: "Ecosystems, biodiversity, and environmental interactions",
    topics: ["Population dynamics", "Food chains and webs", "Conservation", "Climate change"]
  },
  {
    title: "Human Physiology",
    description: "Human body systems and their functions",
    topics: ["Digestive system", "Circulatory system", "Respiratory system", "Nervous system"]
  }
];

const biologyLevels = [
  {
    level: "IGCSE Biology",
    description: "Foundation level biology covering core concepts and practical skills",
    grades: "A* - G",
    duration: "2 years",
    image: "/images/students/biology-tuition.jpg"
  },
  {
    level: "IB Biology SL",
    description: "Standard Level IB Biology with comprehensive coverage of key topics",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/tuition-student-study.jpg"
  },
  {
    level: "IB Biology HL",
    description: "Higher Level IB Biology with advanced topics and extended research",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/ib-tuition-group.jpg"
  }
];

const biologyBenefits = [
  {
    icon: <FaMicroscope className="h-6 w-6 text-navy" />,
    title: "Practical Skills",
    description: "Develop laboratory techniques and experimental design skills"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Scientific Method",
    description: "Learn to think critically and apply scientific reasoning"
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-navy" />,
    title: "University Preparation",
    description: "Excellent foundation for medicine, biology, and related fields"
  },
  {
    icon: <FaFlask className="h-6 w-6 text-navy" />,
    title: "Research Skills",
    description: "Develop research and analytical skills for future studies"
  }
];

export default function BiologyTuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/biology-tuition.jpg"
            alt="Biology tuition for IB and IGCSE students"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Biology Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert Biology tutoring for IGCSE and IB students. Master cell biology, genetics, ecology, and human physiology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Biology Tutor
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

      {/* Biology Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Biology Tuition?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Biology is a fascinating subject that explores life and living organisms. Our expert tutors help students 
              understand complex biological concepts through clear explanations, practical examples, and hands-on learning.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're studying IGCSE or IB Biology, our tutors provide personalized guidance to help you excel 
              in exams and develop a deep understanding of biological principles.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Comprehensive coverage of all syllabus topics</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Practical laboratory skills development</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Exam preparation with past paper practice</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/students/tuition-student-study.jpg"
              alt="Biology student studying with microscope"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Biology Levels */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Biology Programs We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Biology tutoring for all levels and curricula
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {biologyLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={level.image}
                    alt={`${level.level} biology tuition`}
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

      {/* Biology Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Biology Topics We Cover</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of all major Biology topics for IGCSE and IB students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {biologyTopics.map((topic, index) => (
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

      {/* Biology Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Biology Tuition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why studying Biology with our expert tutors makes a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {biologyBenefits.map((benefit, index) => (
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
              alt="Biology students working together"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teaching Approach</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaBook className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Conceptual Understanding</h3>
                  <p className="text-gray-600">We focus on building deep understanding rather than memorization</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaMicroscope className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Application</h3>
                  <p className="text-gray-600">Real-world examples and laboratory skills development</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FaChartLine className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-gray-600">Regular assessments and detailed feedback on performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Biology?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our Biology tuition program and discover the fascinating world of life sciences with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Biology Tuition Today
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Speak to Our Biology Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 