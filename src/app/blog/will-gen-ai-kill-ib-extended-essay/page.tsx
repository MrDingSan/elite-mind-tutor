"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaLightbulb, FaExclamationTriangle, FaCheckCircle, FaRocket } from 'react-icons/fa';

export default function BlogPost() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/student-self-study-in-library.jpg"
            alt="Student studying and writing in library"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 text-sm text-indigo-100 mb-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  July 8, 2025
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  Dr. Kevin
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Will Gen-AI Kill the IB Extended Essay? A Deep Dive into the Future of Student Writing
              </h1>
              <p className="text-xl text-indigo-100">
                How to stay ahead ethically and intelligently in the age of AI
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
            className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
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
                July 8, 2025
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                Dr. Kevin, Founder of EliteMind Tutor
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaExclamationTriangle className="mr-3 text-orange-500" />
            The question everyone is (secretly) asking
          </h2>
          
          <p className="text-gray-700 mb-6">
            A few years ago, writing the IB Extended Essay (EE) and Internal Assessment (IA) meant countless nights in the library, messy drafts, and hours of refining arguments.
          </p>
          
          <p className="text-gray-700 mb-6">
            Today? Students can type a prompt into a generative AI tool like ChatGPT or Claude, and in seconds — boom — a "perfect" essay appears.
          </p>
          
          <p className="text-gray-700 mb-8">
            So… is this the end of original student writing? Will the EE and IA lose their value? Or, is there a deeper opportunity hidden here for those who think smarter rather than shortcut?
          </p>
          
          <p className="text-gray-700 mb-8">
            In this post, I'll break down exactly how Gen-AI will transform IB writing, the traps most students will fall into, and how you (or your child) can actually use AI to get ahead ethically and intelligently.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaLightbulb className="mr-3 text-yellow-500" />
            How AI threatens the soul of the IB writing process
          </h2>
          
          <p className="text-gray-700 mb-6">
            The IB philosophy has always emphasized critical thinking, original research, and independent learning. The EE and IA are not just about producing a final essay — they are about learning how to think, research, analyze, and argue.
          </p>
          
          <p className="text-gray-700 mb-4">But now, Gen-AI can:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Draft arguments</li>
            <li>Summarize research papers</li>
            <li>Suggest structures</li>
            <li>Even simulate "critical analysis"</li>
          </ul>
          
          <p className="text-gray-700 mb-6">
            On the surface, this sounds great. But here's the hidden danger:
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
            <p className="text-orange-800 font-semibold">
              When AI does the thinking for you, you lose the skill to think deeply yourself.
            </p>
          </div>
          
          <p className="text-gray-700 mb-8">
            I've already seen students who rely on AI end up with essays that look polished but are shallow, with generic analysis and zero authentic voice. These essays often fail to stand out to examiners who look for originality and personal engagement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaExclamationTriangle className="mr-3 text-red-500" />
            Why simply "using AI" will backfire (even if it looks good)
          </h2>
          
          <p className="text-gray-700 mb-6">
            Many students think, "I can use AI to generate my essay, then edit it a bit — no problem!"
          </p>
          
          <p className="text-gray-700 mb-4">But here's the truth:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>IB markers are trained to spot "overly polished" but empty essays.</li>
            <li>Schools are increasingly asking for detailed process documentation (notes, outlines, early drafts) to verify authenticity.</li>
            <li>AI detectors (imperfect but improving) will flag suspiciously "uniform" or generic text.</li>
            <li>Even beyond detection, an AI-generated essay will often lack the subtle insights that come from personal struggle — and ironically, this struggle is exactly what makes top-scoring essays special.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaCheckCircle className="mr-3 text-green-500" />
            How to actually use AI smartly (without killing your learning)
          </h2>
          
          <p className="text-gray-700 mb-6">
            Instead of outsourcing the whole essay, students can use AI as a thinking partner, not a replacement. Here's how:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ Brainstorming & framing questions</h3>
          <p className="text-gray-700 mb-4">
            Use AI to bounce around possible research questions, explore angles, or check if a topic is too broad or too narrow.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800 font-medium">💬 Prompt idea:</p>
            <p className="text-blue-700">"Suggest five IB EE research questions on the impact of microplastics in marine life, ranked by feasibility and originality."</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Organizing ideas</h3>
          <p className="text-gray-700 mb-4">
            AI can help build an initial outline, so you don't feel lost in a sea of data.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800 font-medium">💬 Prompt idea:</p>
            <p className="text-blue-700">"Suggest a possible chapter breakdown for an EE on the cultural impact of K-pop in Southeast Asia."</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3️⃣ Reviewing logic gaps</h3>
          <p className="text-gray-700 mb-4">
            After writing your own draft, ask AI to identify weak transitions or unsupported claims.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800 font-medium">💬 Prompt idea:</p>
            <p className="text-blue-700">"Analyze this paragraph for logical flow and suggest improvements."</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4️⃣ Style polishing</h3>
          <p className="text-gray-700 mb-6">
            Use AI to refine grammar and wording, but always keep your personal voice. An authentic style is what examiners love.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaLightbulb className="mr-3 text-yellow-500" />
            The mindset shift: from "cheating" to "co-creating"
          </h2>
          
          <p className="text-gray-700 mb-6">
            The biggest opportunity is to shift from viewing AI as a "shortcut" to viewing it as a "sparring partner."
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Let AI challenge you, but not replace you.</li>
            <li>Let it suggest, but not decide.</li>
            <li>Let it polish, but not overwrite your authentic voice.</li>
          </ul>
          
          <p className="text-gray-700 mb-8">
            When used this way, students develop even deeper meta-cognitive skills — learning to think about their thinking.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaRocket className="mr-3 text-purple-500" />
            Practical tips to stay ahead (and authentic)
          </h2>
          
          <ul className="list-none pl-0 mb-6">
            <li className="flex items-start mb-3">
              <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Keep all drafts and notes — show your thinking process.</span>
            </li>
            <li className="flex items-start mb-3">
              <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Reflect in your writing journal about how you used AI — IB actually encourages this transparency.</span>
            </li>
            <li className="flex items-start mb-3">
              <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Prioritize personal insights: weave in interviews, local data, or unique experiments AI cannot replicate.</span>
            </li>
            <li className="flex items-start mb-3">
              <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Build your "why" — examiners love essays that show genuine curiosity and personal passion.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Conclusion: The future is hybrid</h2>
          
          <p className="text-gray-700 mb-6">
            Gen-AI won't kill the IB Extended Essay. But it will kill shallow, last-minute essays.
          </p>
          
          <p className="text-gray-700 mb-6">
            Students who learn to partner with AI — rather than hide behind it — will not only score higher, but also build future-proof skills in critical thinking and self-reflection.
          </p>
          
          <p className="text-gray-700 mb-8">
            In a world flooded with AI-generated content, real human thought will stand out more than ever.
          </p>

          <div className="bg-indigo-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">✉️ Bonus for students & parents</h3>
            <p className="text-indigo-700 mb-4">
              If you'd like, I can help create a step-by-step "AI + EE workflow guide", with sample prompts and example reflections, tailored for IB students. Just ask!
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Get Your AI + EE Workflow Guide
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
} 