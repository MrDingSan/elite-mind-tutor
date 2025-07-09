"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "Will Gen-AI Kill the IB Extended Essay? A Deep Dive into the Future of Student Writing",
    author: "Dr. Kevin",
    role: "Founder of EliteMind Tutor",
    date: "July 8, 2025",
    excerpt: "How to stay ahead ethically and intelligently in the age of AI. Learn the traps most students will fall into and how to use AI as a thinking partner, not a replacement.",
    image: "/images/blog/student-self-study-in-library.jpg",
    alt: "Student studying and writing in library",
    slug: "will-gen-ai-kill-ib-extended-essay"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Choosing an International School in Singapore (2025 Edition)",
    author: "Dr. Kevin",
    role: "Founder of EliteMind Tutor",
    date: "April 20, 2025",
    excerpt: "Singapore is often called the 'education hub of Asia'—and for good reason. With over 50 international schools offering globally recognized curricula such as IB, IGCSE, A-Levels, AP, and more, parents relocating to or living in Singapore are spoiled for choice.",
    image: "/images/blog/group-tuition-in-classroom.jpg",
    alt: "Group of students in international school classroom",
    slug: "choosing-international-school-singapore-2025"
  },
  {
    id: 3,
    title: "Do International Schools Really Care About Exam Scores?",
    author: "Kevin Ling",
    role: "Private Math Tutor with 13 Years of Experience",
    date: "June 17, 2025",
    excerpt: "A Singapore tutor's perspective on why learning feels so different in international schools and what parents can do to support their children's academic journey.",
    image: "/images/blog/private-tutor.jpg",
    alt: "Private tutor helping a student with homework",
    slug: "do-international-schools-care-about-exam-scores"
  },
  {
    id: 4,
    title: "The Hidden Truth About One-on-One Tuition: A Tutor's Perspective Parents Need to Hear",
    author: "Dr. Kevin",
    role: "Founder of EliteMind Tutor",
    date: "June 29, 2025",
    excerpt: "After over a decade of working with international school students, here's what parents and students need to understand about the real value of private tutoring.",
    image: "/images/blog/student-tuition-in-classroom.jpg",
    alt: "One-on-one tuition session in classroom",
    slug: "the-hidden-truth-about-one-on-one-tuition"
  }
];

// Sort blog posts by date in descending order
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/students/private-tutor.jpg"
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
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-navy transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center text-indigo-600 group-hover:text-indigo-800 font-semibold">
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 