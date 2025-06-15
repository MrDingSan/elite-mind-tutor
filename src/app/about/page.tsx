"use client";

import React from 'react';
import { FaGraduationCap, FaLightbulb, FaChartLine, FaUsers, FaBook, FaAward, FaClock, FaChartBar, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom2.jpg"
            alt="Students learning"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About EliteMind Tutor
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transforming education through personalized learning experiences
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/students/study3.jpg"
              alt="Students in classroom"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At EliteMind Tutor, we are dedicated to transforming the learning experience for every student. 
              Our mission is to ignite a passion for learning while providing the highest quality education 
              that empowers students to achieve their full potential.
            </p>
          </div>
        </div>
      </div>

      {/* Teaching Methods Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teaching Methods</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine proven teaching methodologies with innovative approaches to create an engaging and effective learning environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose EliteMind Tutor?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We stand out through our commitment to excellence and student success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/students/classroom3.jpg"
                alt="Expert Tutors"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="h-8 w-8 text-navy" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tutors</h3>
            <p className="text-gray-600">
              Highly qualified and experienced tutors dedicated to student success.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/students/classroom4.jpg"
                alt="Flexible Scheduling"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaClock className="h-8 w-8 text-navy" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Convenient timing options to fit your busy schedule.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/students/book1.jpg"
                alt="Proven Results"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaChartBar className="h-8 w-8 text-navy" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
            <p className="text-gray-600">
              Track record of significant improvement in student performance.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/students/study1.jpg"
                alt="Personalized Support"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHandshake className="h-8 w-8 text-navy" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Support</h3>
            <p className="text-gray-600">
              Individual attention and customized learning plans for each student.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join EliteMind Tutor today and experience the difference in your academic performance.
          </p>
          <Link
            href="/request-tutor"
            className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Request a Tutor
          </Link>
        </div>
      </div>
    </div>
  );
} 