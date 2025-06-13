"use client";

import React from 'react';
import { FaGraduationCap, FaLightbulb, FaChartLine, FaUsers, FaBook, FaAward, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const teachingMethods = [
  {
    icon: <FaLightbulb className="h-8 w-8 text-navy" />,
    title: "Interactive Learning",
    description: "We believe in active engagement rather than passive learning. Our tutors use interactive methods like problem-solving exercises, group discussions, and real-world applications to make learning more engaging and effective."
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-navy" />,
    title: "Personalized Approach",
    description: "Every student is unique. We tailor our teaching methods to match individual learning styles, pace, and goals. This personalized approach ensures maximum understanding and retention."
  },
  {
    icon: <FaBook className="h-8 w-8 text-navy" />,
    title: "Conceptual Understanding",
    description: "Instead of rote memorization, we focus on building strong conceptual foundations. Students learn to understand the 'why' behind concepts, enabling them to apply knowledge in various contexts."
  },
  {
    icon: <FaUsers className="h-8 w-8 text-navy" />,
    title: "Collaborative Learning",
    description: "We encourage peer learning and group discussions to develop critical thinking and communication skills. This approach helps students learn from different perspectives and build confidence."
  }
];

const expertise = [
  {
    title: "Academic Excellence",
    description: "Our tutors are graduates from top universities with strong academic backgrounds and proven teaching experience.",
    icon: <FaGraduationCap className="h-8 w-8 text-navy" />
  },
  {
    title: "Curriculum Expertise",
    description: "Specialized knowledge in IB and IGCSE curricula, with deep understanding of examination requirements and assessment criteria.",
    icon: <FaBook className="h-8 w-8 text-navy" />
  },
  {
    title: "Proven Results",
    description: "Consistent track record of helping students achieve significant grade improvements and top scores in their examinations.",
    icon: <FaAward className="h-8 w-8 text-navy" />
  }
];

const keyFeatures = [
  "Personalized learning plans tailored to each student",
  "Expert tutors from top universities",
  "Comprehensive IB and IGCSE curriculum coverage",
  "Regular progress tracking and feedback",
  "Flexible scheduling options",
  "Both online and in-person tutoring available"
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom1.jpg"
            alt="Students in classroom"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About EliteMind Tutor
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At EliteMind Tutor, we are dedicated to transforming the learning experience for every student. Our mission is to ignite a passion for learning while providing the highest quality education that empowers students to achieve their full potential.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/students/study1.jpg"
              alt="Student studying"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At EliteMind, we are dedicated to transforming the learning experience for every student. Our mission is to ignite a passion for learning while providing the highest quality education that empowers students to achieve their full potential.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where every student has access to personalized education that fosters growth and success. Through our innovative teaching methods and dedicated approach, we aim to inspire a lifelong love for learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features with Image Background */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom2.jpg"
            alt="Classroom background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-indigo-900/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose EliteMind Tutor?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Experience the difference of our comprehensive approach to education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300 flex items-start space-x-4"
              >
                <FaCheckCircle className="h-6 w-6 text-navy-300 flex-shrink-0 mt-1" />
                <p className="text-lg text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Teaching Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We employ innovative teaching methods designed to engage students and foster a love for learning
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachingMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise with Image Grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by years of experience and proven results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section with Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of dedicated educators committed to your success
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team consists of highly qualified tutors with extensive experience in teaching IGCSE and IB curriculum. Each tutor brings their unique expertise and passion for teaching to create an engaging learning environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We carefully select our tutors based on their academic achievements, teaching experience, and ability to connect with students. Our rigorous selection process ensures that we maintain the highest standards of education.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/students/study2.jpg"
                  alt="Student studying"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/students/study3.jpg"
                  alt="Student studying"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/students/study4.jpg"
                  alt="Student studying"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/students/group_study1.jpg"
                alt="Group study session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/students/tutoring1.jpg"
                alt="One-on-one tutoring"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom3.jpg"
            alt="Classroom background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join us and experience the difference of personalized, engaging education
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 