"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaBook, FaChartLine, FaUsers, FaAward, FaChartBar, FaCheckCircle, FaArrowRight, FaGlobe } from 'react-icons/fa';

const economicsTopics = [
  {
    title: "Microeconomics",
    description: "Individual economic behavior and market structures",
    topics: ["Supply and demand", "Market structures", "Consumer behavior", "Production theory"]
  },
  {
    title: "Macroeconomics",
    description: "National and global economic systems",
    topics: ["GDP and growth", "Inflation and unemployment", "Fiscal policy", "Monetary policy"]
  },
  {
    title: "International Trade",
    description: "Global trade and economic integration",
    topics: ["Comparative advantage", "Trade barriers", "Exchange rates", "Globalization"]
  },
  {
    title: "Development Economics",
    description: "Economic development and sustainability",
    topics: ["Economic indicators", "Development strategies", "Sustainability", "Inequality"]
  }
];

const economicsLevels = [
  {
    level: "IGCSE Economics",
    description: "Core and Extended level economics with real-world applications",
    grades: "A* - G",
    duration: "2 years",
    image: "/images/students/economics-tuition.jpg"
  },
  {
    level: "IB Economics SL",
    description: "Standard Level IB Economics with comprehensive coverage",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/tuition-student-study.jpg"
  },
  {
    level: "IB Economics HL",
    description: "Higher Level IB Economics with advanced analysis and research",
    grades: "1 - 7",
    duration: "2 years",
    image: "/images/students/ib-tuition-group.jpg"
  }
];

const economicsBenefits = [
  {
    icon: <FaChartBar className="h-6 w-6 text-navy" />,
    title: "Analytical Skills",
    description: "Develop critical thinking and data analysis abilities"
  },
  {
    icon: <FaGlobe className="h-6 w-6 text-navy" />,
    title: "Global Understanding",
    description: "Understand world economies and international relations"
  },
  {
    icon: <FaChartLine className="h-6 w-6 text-navy" />,
    title: "Business Foundation",
    description: "Essential knowledge for business and finance careers"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Policy Analysis",
    description: "Learn to evaluate economic policies and their impacts"
  }
];

export default function EconomicsTuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/economics-tuition.jpg"
            alt="Economics tuition for IB and IGCSE students"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Economics Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert Economics tutoring for IGCSE and IB students. Master microeconomics, macroeconomics, and international trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Economics Tutor
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

      {/* Economics Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Economics Tuition?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Economics is the study of how societies allocate scarce resources. Our expert tutors help students understand 
              complex economic concepts through real-world examples, data analysis, and current events.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're studying IGCSE or IB Economics, our tutors provide personalized guidance to help you 
              develop strong analytical skills and understand the global economy.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Real-world applications and current events</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Data analysis and graphical interpretation</span>
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
              alt="Economics student analyzing data"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Economics Levels */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Economics Programs We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Economics tutoring for all levels and curricula
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {economicsLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={level.image}
                    alt={`${level.level} economics tuition`}
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

      {/* Economics Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Economics Topics We Cover</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of all major Economics topics for IGCSE and IB students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {economicsTopics.map((topic, index) => (
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

      {/* Economics Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Economics Tuition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why studying Economics with our expert tutors makes a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {economicsBenefits.map((benefit, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Economics?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our Economics tuition program and develop essential analytical skills for understanding the global economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Economics Tuition Today
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Speak to Our Economics Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 