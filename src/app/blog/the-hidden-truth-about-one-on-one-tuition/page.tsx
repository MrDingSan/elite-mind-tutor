"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';

export default function BlogPost() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/students/tuition-student-english.jpg"
            alt="One-on-one tuition session"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 text-sm text-white/80 mb-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  June 29, 2025
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  Dr. Kevin
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                The Hidden Truth About One-on-One Tuition: A Tutor's Perspective Parents Need to Hear
              </h1>
              <p className="text-xl text-white/90">
                After over a decade of working with international school students, here's what parents and students need to understand about the real value of private tutoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-navy transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                June 29, 2025
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                Dr. Kevin, Founder of EliteMind Tutor
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
          <p className="text-gray-700 mb-6">
            After over a decade of working closely with international school students in Singapore, I've seen a pattern that both surprises and concerns me: many parents and students carry unrealistic expectations about what one-on-one tuition can achieve.
          </p>
          <p className="text-gray-700 mb-8">
            I've had countless students come to me and say, "I didn't pay attention in school. Can you help me understand everything?" Or parents who hope that paying for a private tutor will magically push their child's grades to the top. This belief misses the real value of tuition — and can even undermine a child's growth.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Core of Learning Still Happens in School</h2>
          <p className="text-gray-700 mb-6">
            The foundation of a student's knowledge, discipline, and study habits must be built in school. That's where students spend the most time, interact with peers, and are exposed to new ideas daily.
          </p>
          <p className="text-gray-700 mb-6">
            One-on-one tuition is not meant to replace this core; it's meant to strengthen it. Think of tuition as a finely tuned supplement — a targeted boost to clarify confusing concepts, fill in learning gaps, and build confidence.
          </p>
          <p className="text-gray-700 mb-8">
            When students skip engaging in school and expect a tutor to "cover everything later," they lose the chance to build critical skills: active listening, in-class problem-solving, and learning how to ask questions in real time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Misunderstanding: "I'll Just Learn It All with My Tutor"</h2>
          <p className="text-gray-700 mb-6">
            This is one of the most common — and damaging — misconceptions I see. Some students adopt a passive mindset, assuming they can "catch up later" during tuition sessions.
          </p>
          <p className="text-gray-700 mb-6">
            In reality, my most successful students — those who later enter top universities and flourish in demanding programs — are the ones who maximize their school learning first. They use one-on-one tuition to focus on fine-tuning, rather than rebuilding from scratch.
          </p>
          <p className="text-gray-700 mb-8">
            They come to lessons with specific questions, highlight exactly what they didn't fully grasp in class, and seek to deepen rather than redo their learning. Tuition becomes an advanced workshop rather than a repair center.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Parents' Perspective: Control vs. Support</h2>
          <p className="text-gray-700 mb-6">
            I also understand the parents' side. It's natural to feel frustrated when you can't control what happens at school — the curriculum, the teaching style, or the large class sizes. Many parents try to "fix" this by hiring a private tutor, expecting dramatic grade improvements simply because they are paying extra.
          </p>
          <p className="text-gray-700 mb-8">
            However, it's crucial to recognize that tuition is not a guarantee of results on its own. True progress happens when parents support a learning mindset at home, encourage curiosity, and help children build discipline around both schoolwork and tuition.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Truly Maximize One-on-One Tuition</h2>
          <p className="text-gray-700 mb-6">
            Here's what I've seen consistently among my highest-achieving students:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Strategies for Success:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold text-navy mr-2">•</span>
                <span><strong>Prepare Beforehand:</strong> They review their school materials and identify gaps before coming to a tuition session. This preparation makes the time far more effective.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-navy mr-2">•</span>
                <span><strong>Ask Specific Questions:</strong> Instead of expecting the tutor to guess their struggles, they clearly articulate where they are stuck.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-navy mr-2">•</span>
                <span><strong>Connect Tuition to School Learning:</strong> They constantly tie private lessons back to their main school syllabus — upcoming exams, projects, or topics they need to master soon.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-navy mr-2">•</span>
                <span><strong>Build Study Discipline:</strong> They don't rely solely on tuition; they maintain a regular study routine and keep up with school assignments on their own.</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8">
            This proactive approach turns tuition into a high-impact supplement rather than a last-minute rescue.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Belief as a Tutor</h2>
          <div className="bg-navy/5 border-l-4 border-navy p-6 mb-8">
            <FaQuoteLeft className="text-navy text-2xl mb-4" />
            <p className="text-gray-700 italic text-lg">
              I've always believed that the real magic of learning happens when a student actively engages, both in school and in private lessons. The role of a tutor is to sharpen, reinforce, and inspire — not to spoon-feed or replace the fundamental learning process.
            </p>
          </div>
          <p className="text-gray-700 mb-8">
            Over the years, I've seen firsthand how this mindset creates not just strong students, but independent, curious thinkers who are ready for the challenges of university and beyond.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            One-on-one tuition is a powerful tool, but it is only truly transformative when students and parents understand its role: a strategic supplement to school learning, not a replacement.
          </p>
          <p className="text-gray-700 mb-8">
            When used correctly, it helps students unlock their full potential — by enhancing, refining, and deepening the knowledge they build in school every day.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
            <p className="text-gray-700">
              Dr. Kevin is the founder of EliteMind Tutor, with over a decade of experience working with international school students in Singapore. He specializes in helping students develop effective learning strategies and achieve their academic potential through personalized tutoring approaches.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/blog/choosing-international-school-singapore-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/students/ib-tuition-group.jpg"
                    alt="International school students"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-navy transition-colors">
                    The Ultimate Guide to Choosing an International School in Singapore (2025 Edition)
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive guide to selecting the right international school for your child in Singapore.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/blog/do-international-schools-care-about-exam-scores" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/students/private-tutor.jpg"
                    alt="Private tutor session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-navy transition-colors">
                    Do International Schools Really Care About Exam Scores?
                  </h3>
                  <p className="text-gray-600">
                    A tutor's perspective on learning differences in international schools and how parents can support their children.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 