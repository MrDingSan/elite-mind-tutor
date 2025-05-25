"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBook, FaCalculator, FaFlask, FaAtom, FaGraduationCap, FaLightbulb, FaSearch } from 'react-icons/fa';

// Blog post data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: React.ReactNode;
  slug: string;
  featured?: boolean;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering IB Math HL: A Comprehensive Guide',
    excerpt: 'Learn essential strategies and tips for excelling in IB Mathematics Higher Level, including key topics and exam preparation techniques.',
    category: 'Mathematics',
    date: '2024-03-15',
    readTime: '8 min read',
    icon: <FaCalculator className="h-6 w-6 text-indigo-600" />,
    slug: 'mastering-ib-math-hl',
    featured: true,
    image: '/images/blog/math-hl.jpg'
  },
  {
    id: '2',
    title: 'Understanding IGCSE Physics: Core Concepts Explained',
    excerpt: 'A detailed breakdown of fundamental physics concepts for IGCSE students, with practical examples and common misconceptions addressed.',
    category: 'Physics',
    date: '2024-03-10',
    readTime: '6 min read',
    icon: <FaAtom className="h-6 w-6 text-indigo-600" />,
    slug: 'understanding-igcse-physics',
    featured: true,
    image: '/images/blog/physics.jpg'
  },
  {
    id: '3',
    title: 'Chemistry Lab Skills: Essential Techniques for IB Students',
    excerpt: 'Master the essential laboratory techniques required for IB Chemistry, including safety protocols and data analysis methods.',
    category: 'Chemistry',
    date: '2024-03-05',
    readTime: '7 min read',
    icon: <FaFlask className="h-6 w-6 text-indigo-600" />,
    slug: 'chemistry-lab-skills'
  },
  {
    id: '4',
    title: 'How to Choose Between IB Math AA and AI',
    excerpt: 'A comprehensive guide to help students decide between IB Mathematics Analysis and Approaches (AA) and Applications and Interpretation (AI).',
    category: 'Mathematics',
    date: '2024-02-28',
    readTime: '5 min read',
    icon: <FaCalculator className="h-6 w-6 text-indigo-600" />,
    slug: 'choosing-ib-math-aa-ai'
  },
  {
    id: '5',
    title: 'Effective Study Techniques for IGCSE Students',
    excerpt: 'Discover proven study methods and time management strategies to maximize your IGCSE exam preparation.',
    category: 'Study Tips',
    date: '2024-02-20',
    readTime: '6 min read',
    icon: <FaGraduationCap className="h-6 w-6 text-indigo-600" />,
    slug: 'effective-study-techniques'
  },
  {
    id: '6',
    title: 'Common Mistakes in IB Physics and How to Avoid Them',
    excerpt: 'Learn about frequent errors students make in IB Physics and practical strategies to prevent them in your exams.',
    category: 'Physics',
    date: '2024-02-15',
    readTime: '5 min read',
    icon: <FaAtom className="h-6 w-6 text-indigo-600" />,
    slug: 'common-mistakes-ib-physics'
  }
];

const categories = [
  { name: 'All', icon: <FaBook className="h-5 w-5" /> },
  { name: 'Mathematics', icon: <FaCalculator className="h-5 w-5" /> },
  { name: 'Physics', icon: <FaAtom className="h-5 w-5" /> },
  { name: 'Chemistry', icon: <FaFlask className="h-5 w-5" /> },
  { name: 'Study Tips', icon: <FaGraduationCap className="h-5 w-5" /> }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Educational Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Expert insights, study guides, and tips to help you excel in your academic journey
            </p>
          </div>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      {/* Add actual images later */}
                      <div className="w-full h-48 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {post.icon}
                        <span className="text-sm font-medium text-indigo-600">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {post.icon}
                      <span className="text-sm font-medium text-indigo-600">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 