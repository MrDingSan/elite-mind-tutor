"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Choosing an International School in Singapore (2025 Edition)",
    author: "Dr. Kevin",
    role: "Founder of EliteMind Tutor",
    date: "March 15, 2024",
    excerpt: "Singapore is often called the 'education hub of Asia'—and for good reason. With over 50 international schools offering globally recognized curricula such as IB, IGCSE, A-Levels, AP, and more, parents relocating to or living in Singapore are spoiled for choice.",
    image: "/images/students/classroom1.jpg",
    slug: "choosing-international-school-singapore-2025"
  }
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/students/classroom2.jpg"
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Education Insights
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Expert advice and guidance for your educational journey
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group"
                  >
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 