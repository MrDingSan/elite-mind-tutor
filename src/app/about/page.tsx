"use client";

import React from 'react';
import { FaGraduationCap, FaLightbulb, FaChartLine, FaUsers, FaBook, FaAward } from 'react-icons/fa';
import Image from 'next/image';

const teachingMethods = [
  {
    icon: <FaLightbulb className="h-8 w-8 text-indigo-600" />,
    title: "Interactive Learning",
    description: "We believe in active engagement rather than passive learning. Our tutors use interactive methods like problem-solving exercises, group discussions, and real-world applications to make learning more engaging and effective."
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-indigo-600" />,
    title: "Personalized Approach",
    description: "Every student is unique. We tailor our teaching methods to match individual learning styles, pace, and goals. This personalized approach ensures maximum understanding and retention."
  },
  {
    icon: <FaBook className="h-8 w-8 text-indigo-600" />,
    title: "Conceptual Understanding",
    description: "Instead of rote memorization, we focus on building strong conceptual foundations. Students learn to understand the 'why' behind concepts, enabling them to apply knowledge in various contexts."
  },
  {
    icon: <FaUsers className="h-8 w-8 text-indigo-600" />,
    title: "Collaborative Learning",
    description: "We encourage peer learning and group discussions to develop critical thinking and communication skills. This approach helps students learn from different perspectives and build confidence."
  }
];

const expertise = [
  {
    title: "Academic Excellence",
    description: "Our tutors are graduates from top universities with strong academic backgrounds and proven teaching experience.",
    icon: <FaGraduationCap className="h-8 w-8 text-indigo-600" />
  },
  {
    title: "Curriculum Expertise",
    description: "Specialized knowledge in IB and IGCSE curricula, with deep understanding of examination requirements and assessment criteria.",
    icon: <FaBook className="h-8 w-8 text-indigo-600" />
  },
  {
    title: "Proven Results",
    description: "Consistent track record of helping students achieve significant grade improvements and top scores in their examinations.",
    icon: <FaAward className="h-8 w-8 text-indigo-600" />
  }
];

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Elite Mind Tutor
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Transforming education through personalized learning and innovative teaching methods
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Elite Mind Tutor, we are dedicated to transforming the learning experience for every student. Our mission is to ignite a passion for learning while providing the highest quality education that empowers students to achieve their full potential.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that education should be engaging, personalized, and effective. Our approach combines academic excellence with innovative teaching methods to create an environment where students not only learn but thrive.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/teaching.jpg"
              alt="Students learning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Teaching Methods */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
      </div>

      {/* Expertise */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

      {/* Team Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="Our teaching team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl p-12 text-center">
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
  );
} 