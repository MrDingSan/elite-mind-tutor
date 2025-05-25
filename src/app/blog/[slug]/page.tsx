"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCalculator, FaAtom, FaFlask, FaGraduationCap, FaShare, FaBookmark, FaClock, FaCalendarAlt, FaTag } from 'react-icons/fa';

// This would typically come from a database or CMS
const blogPosts = {
  'mastering-ib-math-hl': {
    title: 'Mastering IB Math HL: A Comprehensive Guide',
    category: 'Mathematics',
    date: '2024-03-15',
    readTime: '8 min read',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Mathematics Specialist',
      image: '/images/tutors/sarah-chen.jpg'
    },
    content: `
      <h2>Introduction</h2>
      <p>IB Mathematics Higher Level is one of the most challenging courses in the IB curriculum. This guide will help you understand the key components and develop effective strategies for success.</p>

      <h2>Key Topics Covered</h2>
      <ul>
        <li>Algebra and Functions</li>
        <li>Calculus</li>
        <li>Statistics and Probability</li>
        <li>Vectors and Matrices</li>
      </ul>

      <h2>Study Strategies</h2>
      <p>Success in IB Math HL requires a combination of understanding concepts and regular practice. Here are some effective strategies:</p>
      <ol>
        <li>Regular practice with past papers</li>
        <li>Understanding the mark scheme</li>
        <li>Using technology effectively</li>
        <li>Time management during exams</li>
      </ol>

      <h2>Common Challenges</h2>
      <p>Many students face similar challenges in IB Math HL. Here's how to overcome them:</p>
      <ul>
        <li>Complex calculus concepts</li>
        <li>Time pressure in exams</li>
        <li>Understanding the application of concepts</li>
      </ul>

      <h2>Conclusion</h2>
      <p>With the right approach and consistent effort, success in IB Math HL is achievable. Remember to practice regularly and seek help when needed.</p>
    `,
    relatedPosts: [
      {
        title: 'How to Choose Between IB Math AA and AI',
        slug: 'choosing-ib-math-aa-ai',
        category: 'Mathematics'
      },
      {
        title: 'Effective Study Techniques for IB Students',
        slug: 'effective-study-techniques',
        category: 'Study Tips'
      }
    ]
  },
  // Add more blog posts here
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    if (post) {
      const headings = post.content.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
      const toc = headings.map((heading, index) => {
        const text = heading.replace(/<[^>]*>/g, '');
        const id = `section-${index + 1}`;
        return { id, text };
      });
      setTableOfContents(toc);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Post not found</h1>
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-500">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-100 hover:text-white mb-8"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-indigo-100">
              <div className="flex items-center gap-2">
                <FaTag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-gray-600 hover:text-indigo-600"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-6">
            <article className="bg-white rounded-xl shadow-lg p-8">
              <div 
                className="prose prose-lg prose-indigo max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Author Bio */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {relatedPost.title}
                      </h4>
                      <span className="text-sm text-indigo-600">{relatedPost.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Share and Save */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <button className="p-2 text-gray-600 hover:text-indigo-600">
                    <FaShare className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-indigo-600">
                    <FaBookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 