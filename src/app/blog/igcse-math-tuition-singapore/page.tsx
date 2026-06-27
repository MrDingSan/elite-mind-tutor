import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaCheckCircle, FaUser } from 'react-icons/fa';

const canonicalUrl = 'https://elitemindtutor.com/blog/igcse-math-tuition-singapore';

export const metadata: Metadata = {
  title: 'IGCSE Math Tuition Singapore: When Does Your Child Need Help?',
  description:
    'Learn when IGCSE math tuition in Singapore makes sense, the warning signs to watch for, and how international school students can prepare earlier.',
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'IGCSE Math Tuition in Singapore: A Parent Guide',
    description:
      'A practical guide for parents deciding whether their child needs IGCSE mathematics tuition before exam pressure builds.',
    url: canonicalUrl,
    type: 'article',
    siteName: 'EliteMind Tutor',
    images: [
      {
        url: 'https://elitemindtutor.com/images/blog/private-math-tuition.jpg',
        width: 1200,
        height: 630,
        alt: 'Private math tuition session with a student',
      },
    ],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'IGCSE Math Tuition in Singapore: When Does Your Child Really Need Extra Help?',
  description:
    'A practical guide for international school parents on the timing, warning signs, and best use of IGCSE mathematics tuition.',
  author: {
    '@type': 'Person',
    name: 'Kevin Ling',
  },
  publisher: {
    '@type': 'Organization',
    name: 'EliteMind Tutor',
  },
  datePublished: '2026-06-27',
  dateModified: '2026-06-27',
  mainEntityOfPage: canonicalUrl,
};

export default function IgcseMathTuitionSingaporePage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/private-math-tuition.jpg"
            alt="Private math tuition session with a student"
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
                  June 27, 2026
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  Kevin Ling
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                IGCSE Math Tuition in Singapore: When Does Your Child Really Need Extra Help?
              </h1>
              <p className="text-xl text-white/90">
                A practical guide for parents before small gaps become exam-season panic.
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
                June 27, 2026
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                Kevin Ling, IGCSE Math Tutor in Singapore
              </div>
            </div>
          </div>

          <p className="lead text-xl text-gray-600 mb-8">
            Many international school parents wait until the first poor mock exam before looking for IGCSE math tuition. By then, the problem is usually not one topic. It is a chain of small gaps that have quietly accumulated across algebra, functions, geometry, graphs, and exam technique.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. The early signs your child may need support</h2>
          <p className="text-gray-700 mb-6">
            IGCSE mathematics can feel manageable in class until exam questions start combining several skills at once. A student may understand each topic separately but struggle when a question asks them to connect algebra, graph interpretation, and reasoning in one solution.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They can follow worked examples but freeze on unfamiliar questions.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They make repeated algebra mistakes even after corrections.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They say they understand in class but cannot explain the method at home.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They lose marks from poor working, missing units, or unclear final answers.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Why waiting until mocks is risky</h2>
          <p className="text-gray-700 mb-6">
            Mock exams are useful, but they are late signals. If a student only begins tuition after mocks, the tutor has to rebuild content knowledge and exam habits at the same time. That can work, but it creates pressure.
          </p>
          <p className="text-gray-700 mb-8">
            Earlier support is calmer. It gives students time to relearn foundations, practise across mixed topics, and develop the habit of showing complete working. These are exactly the details that often separate a passable answer from a high-scoring one.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
            <p className="text-indigo-700 font-medium">Best timing:</p>
            <p className="text-indigo-600">Start when patterns appear, not when panic starts. Two or three weak test results in the same skill area are enough evidence to intervene.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. What good IGCSE math tuition should do</h2>
          <p className="text-gray-700 mb-6">
            Effective tuition is not just more homework. The tutor should diagnose why mistakes happen. Is it concept weakness? Careless algebra? Poor exam pacing? Weak interpretation of word problems? Each cause needs a different solution.
          </p>
          <p className="text-gray-700 mb-8">
            A strong IGCSE math tutor should help the student build a topic map, practise mixed questions, review marking schemes, and learn how to present working clearly. The goal is not dependence on the tutor. The goal is independence under exam conditions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. How parents can help at home</h2>
          <p className="text-gray-700 mb-6">
            Parents do not need to reteach mathematics. The most useful support is structure. Ask your child to keep a mistake log, separate careless errors from concept errors, and explain one corrected question each week in plain language.
          </p>
          <p className="text-gray-700 mb-8">
            If they can explain the correction, the learning is becoming stable. If they can only copy the solution, the gap is still there.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">A simple weekly routine:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold text-navy mr-2">1.</span>
                <span>Review one school worksheet or quiz and identify the top two repeated errors.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-navy mr-2">2.</span>
                <span>Redo three similar questions without looking at the worked solution.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-navy mr-2">3.</span>
                <span>Explain one corrected question out loud, including why the old method failed.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Final thought</h2>
          <p className="text-gray-700 mb-8">
            IGCSE math tuition is most powerful when it is targeted and timely. The best support does not simply chase grades. It helps students understand the structure of the syllabus, repair weak foundations, and walk into exams with a method they can trust.
          </p>

          <div className="flex justify-center mt-12">
            <Link
              href="/request-tutor"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Request an IGCSE Math Tutor
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/math-tuition" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/students/math-tuition.jpg"
                    alt="Math tuition in Singapore"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-navy transition-colors">
                    Math Tuition Singapore
                  </h3>
                  <p className="text-gray-600">
                    One-on-one mathematics tuition for IB and IGCSE students in Singapore.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/igcse-tuition" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/students/tuition-student-study.jpg"
                    alt="IGCSE student studying"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-navy transition-colors">
                    IGCSE Tuition Singapore
                  </h3>
                  <p className="text-gray-600">
                    Subject-specific support for international school students preparing for IGCSE exams.
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
