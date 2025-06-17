"use client";

export const runtime = 'edge';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShare, FaBookmark, FaClock, FaCalendarAlt, FaTag } from 'react-icons/fa';

const blogPosts = {
  'choosing-international-school-singapore-2025': {
    title: 'The Ultimate Guide to Choosing an International School in Singapore (2025 Edition)',
    category: 'Education Insights',
    date: '2025-04-20',
    readTime: '12 min read',
    author: {
      name: 'Dr. Kevin',
      role: 'Founder of EliteMind Tutor',
      image: '/images/tutors/kevin-ling.jpg'
    },
    content: `
      <div class="prose prose-lg prose-indigo max-w-none">
        <h2 id="introduction">Introduction</h2>
        <p>Singapore is often called the 'education hub of Asia'—and for good reason. With over 50 international schools offering globally recognized curricula such as IB, IGCSE, A-Levels, AP, and more, parents relocating to or living in Singapore are spoiled for choice.</p>

        <h2 id="why-choose">Why Choose an International School in Singapore?</h2>
        <p>Singapore's international schools offer a unique blend of Eastern and Western educational philosophies, creating a truly global learning environment.</p>

        <h2 id="key-factors">Key Factors to Consider</h2>
        <ul>
          <li>Curriculum Options</li>
          <li>School Culture and Values</li>
          <li>Location and Accessibility</li>
          <li>Facilities and Resources</li>
          <li>Tuition Fees and Additional Costs</li>
        </ul>

        <h2 id="popular-curricula">Popular Curricula in Singapore</h2>
        <p>Understanding the different curricula available is crucial for making the right choice for your child's education.</p>

        <h2 id="conclusion">Conclusion</h2>
        <p>Choosing the right international school in Singapore is a significant decision that will impact your child's educational journey and future opportunities.</p>
      </div>
    `,
    relatedPosts: [
      {
        title: 'Do International Schools Really Care About Exam Scores?',
        slug: 'do-international-schools-care-about-exam-scores',
        category: 'Education Insights'
      }
    ]
  },
  'do-international-schools-care-about-exam-scores': {
    title: 'Do International Schools Really Care About Exam Scores?',
    category: 'Education Insights',
    date: '2025-06-17',
    readTime: '10 min read',
    author: {
      name: 'Kevin Ling',
      role: 'Private Math Tutor with 13 Years of Experience in International School Tuition, Singapore',
      image: '/images/tutors/kevin-ling.jpg'
    },
    content: `
      <div class="prose prose-lg prose-indigo max-w-none">
        <h2 id="parent-questions">What Every Singapore Parent Asks Me</h2>
        <p>"My child says the teacher didn't teach anything."</p>
        <p>"There's no math exam next week?"</p>
        <p>"Are they even preparing for the IB or IGCSE?"</p>
        <p>These are real questions I hear constantly as a private math tutor in Singapore, working with international school students from UWCSEA, Dulwich, Canadian International, and more.</p>
        <p>If you're a parent used to local MOE schools or traditional Chinese education, international schools can feel… confusing.</p>
        <ul>
          <li>No weekly tests</li>
          <li>No clear class ranking</li>
          <li>Kids come home saying, "We had to read it ourselves."</li>
        </ul>
        <p>You're not wrong to feel concerned. But there's a deeper structure behind this — one that affects how you should approach tuition, academic tracking, and long-term development.</p>

        <h2 id="exam-skills">Why It Feels Like They're Not Teaching Exam Skills</h2>
        <p>As a Singapore tutor, I've seen this dozens of times:</p>
        <ul>
          <li>A student is told to read a science chapter before class.</li>
          <li>In class, the teacher runs a discussion instead of a lecture.</li>
          <li>The student gets lost — and tells their parents, "Teacher didn't teach."</li>
        </ul>
        <p>This is called a flipped classroom — a model where content is reviewed at home, and class time is used for active learning.</p>
        <p>💬 "But my child needs explanations. Isn't that what tuition or teachers are for?"</p>
        <p>Exactly. That's why many students end up needing private tuition, especially in math — because this model assumes independence, which not every child has yet.</p>
        <p>And this isn't just math. It's across subjects — and it leaves parents asking…</p>

        <h2 id="scores">So... Do They Even Care About Scores?</h2>
        <p>Yes — but not in the way you think.</p>
        <p>International schools do prepare students for exams like IB, IGCSE, and A-Levels. In fact, top-tier schools in Singapore regularly post excellent results.</p>
        <p>But here's the catch:</p>
        <ul>
          <li>They don't teach to the test week-by-week.</li>
          <li>They measure skills like critical thinking, collaboration, and research.</li>
          <li>They expect students to manage long-term projects instead of last-minute cramming.</li>
        </ul>
        <p>As a Singapore math tutor, I've had to redesign my tuition plans just to help students connect classroom inquiry with exam strategy — because the link isn't always clear to them.</p>

        <h2 id="emphasis">What International Schools Actually Emphasize</h2>
        <p>Let's compare:</p>
        <table class="w-full border-collapse">
          <tr>
            <th class="border p-2">Traditional Singapore Schools</th>
            <th class="border p-2">International Schools</th>
          </tr>
          <tr>
            <td class="border p-2">Weekly tests, timed drills</td>
            <td class="border p-2">Project-based, discussion-driven</td>
          </tr>
          <tr>
            <td class="border p-2">Grades and rankings</td>
            <td class="border p-2">Rubrics, portfolios, teacher feedback</td>
          </tr>
          <tr>
            <td class="border p-2">Exam-centric tuition</td>
            <td class="border p-2">Inquiry-led learning, real-world applications</td>
          </tr>
          <tr>
            <td class="border p-2">Clear metrics and structures</td>
            <td class="border p-2">Broader skill development</td>
          </tr>
        </table>

        <h2 id="improvement">If Not Grades, Then How Do You Know They're Improving?</h2>
        <p>As a math tutor in Singapore, this is the most common anxiety I see from parents:</p>
        <p>"If I don't see scores or test papers, how do I know my child is improving?"</p>
        <p>Here's how international schools measure growth:</p>
        <ul>
          <li>📁 Portfolios & Projects</li>
          <li>📈 Rubrics & Criteria</li>
          <li>🎤 Student-Led Conferences</li>
        </ul>
        <p>These are powerful but foreign to most local families. That's why private tuition sometimes becomes the bridge — not just for knowledge, but for clarity.</p>

        <h2 id="struggles">Why Many Students Still Struggle – and Why Tuition Matters</h2>
        <p>Here's what I see as a tutor in Singapore international schools:</p>
        <ul>
          <li>Students don't know how to self-learn from slides — so the flipped model fails.</li>
          <li>Math lessons become too "open-ended," and exam techniques are lost.</li>
          <li>Group projects make it unclear who's really learning.</li>
        </ul>
        <p>As a math tutor, I often provide structured tuition to help students:</p>
        <ul>
          <li>Understand IB/IGCSE math concepts</li>
          <li>Prepare for exams with past paper strategy</li>
          <li>Build back the confidence they lost in unstructured learning</li>
        </ul>

        <h2 id="model-fit">Is This Model Right for Every Family?</h2>
        <p>Not always.</p>
        <table class="w-full border-collapse">
          <tr>
            <th class="border p-2">Best Fit</th>
            <th class="border p-2">Might Struggle Without Support</th>
          </tr>
          <tr>
            <td class="border p-2">Parents who value inquiry & flexibility</td>
            <td class="border p-2">Parents who want constant test data</td>
          </tr>
          <tr>
            <td class="border p-2">Kids who are independent, self-motivated</td>
            <td class="border p-2">Kids who need direct teaching & repetition</td>
          </tr>
          <tr>
            <td class="border p-2">Families with time to engage in learning</td>
            <td class="border p-2">Busy households that rely on school alone</td>
          </tr>
        </table>

        <h2 id="parent-advice">What Should Parents Do?</h2>
        <p>Here's my advice — both as a tutor and someone who works with many international school families:</p>
        <ol>
          <li>Don't Panic at the Lack of Tests</li>
          <li>Use Tuition to Build Clarity</li>
          <li>Track Real Progress</li>
          <li>Be Involved, But Not Overbearing</li>
        </ol>

        <h2 id="final-thought">Final Thought</h2>
        <p>International schools in Singapore may not look "exam-oriented" on the surface — but they do care about results.</p>
        <p>They just take a longer-term, more holistic path — and that requires a mindset shift.</p>
        <p>As a Singapore private tutor, I help families bridge this gap — especially when students feel lost in the system's freedom.</p>
        <p>So if you're wondering whether your child is learning "enough," the answer is likely yes — but not in the way you're used to. With the right support and understanding, they can succeed in both exams and life beyond school.</p>
      </div>
    `,
    relatedPosts: [
      {
        title: 'The Ultimate Guide to Choosing an International School in Singapore (2025 Edition)',
        slug: 'choosing-international-school-singapore-2025',
        category: 'Education Insights'
      }
    ]
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    if (post) {
      const headings = post.content.match(/<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/g) || [];
      const toc = headings.map((heading) => {
        const idMatch = heading.match(/id="([^"]*)"/);
        const textMatch = heading.match(/>([^<]*)</);
        const id = idMatch ? idMatch[1] : '';
        const text = textMatch ? textMatch[1] : '';
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents */}
          {tableOfContents.length > 0 && (
            <div className="lg:col-span-3">
              <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Blog Content */}
          <div className={`lg:col-span-${tableOfContents.length > 0 ? '9' : '12'}`}>
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                  <p className="text-gray-600 text-sm">{post.author.role}</p>
                </div>
              </div>

              {/* Content */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Related Posts */}
              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {post.relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-sm text-indigo-600 font-medium">{relatedPost.category}</span>
                        <h4 className="text-lg font-semibold text-gray-900 mt-2">{relatedPost.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 