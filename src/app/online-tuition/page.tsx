"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaLaptop, FaCheckCircle, FaArrowRight, FaGlobe, FaVideo, FaClock, FaHeadset } from 'react-icons/fa';

const onlineBenefits = [
  {
    icon: <FaLaptop className="h-6 w-6 text-navy" />,
    title: "Convenience",
    description: "Learn from anywhere with flexible scheduling and no travel time"
  },
  {
    icon: <FaGlobe className="h-6 w-6 text-navy" />,
    title: "Global Access",
    description: "Connect with expert tutors regardless of your location"
  },
  {
    icon: <FaClock className="h-6 w-6 text-navy" />,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work best for your schedule"
  },
  {
    icon: <FaVideo className="h-6 w-6 text-navy" />,
    title: "Interactive Learning",
    description: "Real-time video conferencing with screen sharing and digital tools"
  }
];

const onlineSubjects = [
  {
    name: "Mathematics",
    description: "IB & IGCSE Math with interactive problem-solving",
    image: "/images/students/math-tuition.jpg",
    slug: "math-tuition"
  },
  {
    name: "Physics",
    description: "Virtual lab simulations and theoretical concepts",
    image: "/images/students/physics-tuition.jpg",
    slug: "physics-tuition"
  },
  {
    name: "Chemistry",
    description: "Digital experiments and molecular modeling",
    image: "/images/students/chemistry-tuition.jpg",
    slug: "chemistry-tuition"
  },
  {
    name: "Biology",
    description: "Interactive diagrams and virtual dissections",
    image: "/images/students/biology-tuition.jpg",
    slug: "biology-tuition"
  },
  {
    name: "English",
    description: "Reading, writing, and literature analysis online",
    image: "/images/students/tuition-student-english.jpg",
    slug: "english-tuition"
  },
  {
    name: "Economics",
    description: "Data analysis and economic modeling tools",
    image: "/images/students/economics-tuition.jpg",
    slug: "economics-tuition"
  }
];

const onlineFeatures = [
  {
    icon: <FaVideo className="h-6 w-6 text-navy" />,
    title: "HD Video Conferencing",
    description: "Crystal clear video and audio for seamless communication"
  },
  {
    icon: <FaLaptop className="h-6 w-6 text-navy" />,
    title: "Screen Sharing",
    description: "Share documents, presentations, and digital whiteboards"
  },
  {
    icon: <FaHeadset className="h-6 w-6 text-navy" />,
    title: "Recording Sessions",
    description: "Review lessons later with session recordings"
  },
  {
    icon: <FaBook className="h-6 w-6 text-navy" />,
    title: "Digital Resources",
    description: "Access to online textbooks, practice materials, and tools"
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Book Your Session",
    description: "Choose your subject, level, and preferred time slot through our easy booking system"
  },
  {
    step: "2",
    title: "Connect Online",
    description: "Join your virtual classroom using our secure video conferencing platform"
  },
  {
    step: "3",
    title: "Interactive Learning",
    description: "Engage in real-time with your tutor using digital tools and resources"
  },
  {
    step: "4",
    title: "Track Progress",
    description: "Monitor your improvement with regular assessments and feedback"
  }
];

export default function OnlineTuition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/online-tuition.jpg"
            alt="Online tuition for IB and IGCSE students"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Online Tuition Singapore
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert online tutoring for IGCSE and IB students. Learn from anywhere with our advanced virtual classroom technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Online Tuition
                <FaArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Online Tuition Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Online Tuition?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Online tuition offers the same high-quality education as in-person sessions, with added convenience and flexibility. 
              Our advanced virtual classroom technology ensures an engaging and effective learning experience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're studying IGCSE or IB subjects, our online tutors provide personalized guidance through 
              interactive sessions, digital resources, and real-time feedback.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Same expert tutors, flexible scheduling</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Interactive digital tools and resources</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-navy mr-3" />
                <span className="text-gray-700">Session recordings for review</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/students/private-tutor.jpg"
              alt="Student learning online with tutor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Online Benefits */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Online Tuition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why online learning is the future of education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onlineBenefits.map((benefit, index) => (
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

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Online Tuition Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple steps to start your online learning journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Online Features */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Online Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge technology enhances your learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onlineFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Online Subjects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Subjects Available Online</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All our subjects are available for online tuition with specialized digital tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onlineSubjects.map((subject, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={subject.image}
                  alt={`${subject.name} online tuition`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{subject.name}</h3>
                  <p className="text-white/90 text-sm">{subject.description}</p>
                </div>
              </div>
              <div className="p-6">
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

      {/* Technology Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/students/ib-tuition-group.jpg"
                alt="Students using online learning technology"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Learning Technology</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaLaptop className="h-4 w-4 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Whiteboard</h3>
                    <p className="text-gray-600">Interactive digital whiteboard for real-time problem solving</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaVideo className="h-4 w-4 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Screen Sharing</h3>
                    <p className="text-gray-600">Share documents, presentations, and digital resources instantly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaHeadset className="h-4 w-4 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Quality Audio</h3>
                    <p className="text-gray-600">Crystal clear sound for uninterrupted learning sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Online vs In-Person Tuition</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare the benefits of online and traditional tuition methods
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Online Tuition</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">No travel time or costs</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Flexible scheduling</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Session recordings available</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Digital resources and tools</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Same expert tutors</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">In-Person Tuition</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Face-to-face interaction</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Physical materials and resources</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Structured learning environment</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Immediate hands-on guidance</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Social learning opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Online Tuition?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience the future of education with our advanced online tutoring platform. 
            Join thousands of students who have already discovered the benefits of online learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-tutor"
              className="inline-flex items-center justify-center rounded-lg bg-white text-navy px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Online Tuition Today
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Schedule a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 