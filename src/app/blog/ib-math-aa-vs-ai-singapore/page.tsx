import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaCheckCircle, FaUser } from 'react-icons/fa';

const canonicalUrl = 'https://elitemindtutor.com/blog/ib-math-aa-vs-ai-singapore';

export const metadata: Metadata = {
  title: 'IB Math AA vs AI in Singapore: Which Course Should You Choose?',
  description:
    'A practical Singapore guide to choosing between IB Math AA and AI for international school students, parents, university goals, and exam confidence.',
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'IB Math AA vs AI: A Singapore Parent and Student Guide',
    description:
      'Understand the real difference between IB Math AA and AI, who each course suits, and when tutoring support makes sense.',
    url: canonicalUrl,
    type: 'article',
    siteName: 'EliteMind Tutor',
    images: [
      {
        url: 'https://elitemindtutor.com/images/students/math-tuition.jpg',
        width: 1200,
        height: 630,
        alt: 'IB math student working through questions with a tutor',
      },
    ],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'IB Math AA vs AI: Which Course Should Singapore International School Students Choose?',
  description:
    'A practical guide for Singapore international school families choosing between IB Mathematics: Analysis and Approaches and Applications and Interpretation.',
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

export default function IbMathAaVsAiSingaporePage() {
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
            src="/images/students/math-tuition.jpg"
            alt="IB math student working through exam questions with a tutor"
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
                  June 27, 2026
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  Kevin Ling
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                IB Math AA vs AI: Which Course Should Singapore International School Students Choose?
              </h1>
              <p className="text-xl text-indigo-100">
                A practical guide for families choosing the right IB Mathematics pathway.
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
        <div className="prose prose-lg prose-indigo max-w-none">
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                June 27, 2026
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                Kevin Ling, IB Math Tutor in Singapore
              </div>
            </div>
          </div>

          <p className="lead text-xl text-gray-600 mb-8">
            If your child is in an IB school in Singapore, the Math AA versus Math AI decision often arrives earlier than families expect. On paper, both are valid IB mathematics courses. In real life, the better choice depends on your child&apos;s strengths, university plans, and how much structured support they need.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. What is the simple difference between IB Math AA and AI?</h2>
          <p className="text-gray-700 mb-6">
            <strong>IB Math AA</strong> stands for Analysis and Approaches. It is more algebraic, proof-oriented, and calculus-heavy. Students who enjoy symbolic manipulation, pure mathematics, physics, engineering, computer science, or economics often lean toward AA.
          </p>
          <p className="text-gray-700 mb-8">
            <strong>IB Math AI</strong> stands for Applications and Interpretation. It is more statistics, modelling, technology, and real-world data oriented. Students interested in business, psychology, social sciences, design, humanities, or life sciences may find AI more relevant.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
            <p className="text-indigo-700 font-medium">Important distinction:</p>
            <p className="text-indigo-600">AA is not automatically better, and AI is not automatically easier. The right course is the one that fits your child&apos;s goals and lets them perform strongly.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. When Singapore students should choose IB Math AA</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Your child is considering engineering, physics, mathematics, computer science, or some economics programmes.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They are comfortable with algebra, functions, trigonometry, and multi-step problem solving.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They are aiming for universities or courses that explicitly require AA, especially at Higher Level.</span>
            </li>
          </ul>
          <p className="text-gray-700 mb-8">
            For AA students, tutoring should focus less on doing endless worksheets and more on building fluency: spotting patterns, linking topics, explaining reasoning, and learning how IB examiners phrase unfamiliar problems.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. When Singapore students should choose IB Math AI</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Your child is stronger at applied contexts, data interpretation, and calculator-supported work.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>Their intended university courses do not require AA.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
              <span>They want mathematics to support another direction rather than dominate their IB workload.</span>
            </li>
          </ul>
          <p className="text-gray-700 mb-8">
            AI students still need rigour. The risk is assuming the course is light and then being surprised by modelling, statistics, and interpretation-heavy exam questions. Good support helps students explain the meaning behind the answer, not just produce a number.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Standard Level or Higher Level?</h2>
          <p className="text-gray-700 mb-6">
            The AA versus AI choice is only half the decision. The SL versus HL choice matters just as much. HL creates a heavier workload and a higher ceiling, but it can also drain time from other IB subjects if the student is already stretched.
          </p>
          <p className="text-gray-700 mb-8">
            A useful rule: choose HL when it is required or genuinely strengthens the university application. Choose SL when it protects overall IB performance and still meets the entry requirements.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. How parents can decide without guessing</h2>
          <p className="text-gray-700 mb-6">
            Start with three checks. First, list possible university courses and verify math prerequisites directly from university pages. Second, review your child&apos;s recent test papers and identify whether mistakes come from weak concepts, careless execution, or anxiety with unfamiliar questions. Third, ask whether your child can explain their solution steps out loud.
          </p>
          <p className="text-gray-700 mb-8">
            If they cannot explain the method, the understanding is probably not stable yet. That is where focused IB math tuition can help: not by forcing a harder course, but by clarifying what the student can realistically handle well.
          </p>

          <div className="bg-indigo-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Quick Recommendation</h3>
            <p className="text-indigo-700 mb-0">
              Choose the course that preserves both opportunity and performance. If AA keeps doors open but pulls the overall IB score down, it may not be the smartest route. If AI meets the university requirement and lets the student perform strongly, it can be the better strategic choice.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/request-tutor"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Get IB Math Guidance
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
                    One-on-one IB and IGCSE mathematics support for international school students.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/ib-tuition" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/students/ib-tuition-group.jpg"
                    alt="IB tuition group"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-navy transition-colors">
                    IB Tuition Singapore
                  </h3>
                  <p className="text-gray-600">
                    Subject-specific IB tutoring for students aiming to improve clarity, confidence, and results.
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
