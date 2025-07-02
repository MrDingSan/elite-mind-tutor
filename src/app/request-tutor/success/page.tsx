import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right International School in Singapore",
    excerpt: "A practical guide for parents navigating the school selection process.",
    image: "/images/students/ib-tuition-group.jpg",
    alt: "Group of IB students studying together",
    slug: "choosing-international-school-singapore-2025"
  },
  {
    id: 2,
    title: "Do International Schools Really Care About Exam Scores?",
    excerpt: "A tutor's perspective on learning differences and supporting your child.",
    image: "/images/students/private-tutor.jpg",
    alt: "Private tutor helping a student with homework",
    slug: "do-international-schools-care-about-exam-scores"
  },
  {
    id: 3,
    title: "The Real Value of One-on-One Tuition",
    excerpt: "What parents should know about private tutoring.",
    image: "/images/students/tuition-student-english.jpg",
    alt: "One-on-one tuition session with tutor",
    slug: "the-hidden-truth-about-one-on-one-tuition"
  }
];

export default function RequestSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Thank You! Your Tutor Request Was Sent
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Our team is reviewing your request and will reach out soon—usually within our office hours (9am–8pm daily). We'll help you find a great tutor, typically within 1–2 days.<br /><br />
              In the meantime, you can check our <Link href="/faq" className="text-indigo-600 hover:underline">FAQ for Parents</Link> or <Link href="/request-tutor" className="text-indigo-600 hover:underline">submit another request</Link> if you have more needs.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Panel */}
      <div className="mt-12 max-w-2xl mx-auto w-full">
        <div className="bg-indigo-50 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4 text-center">
            Got time? Explore our latest articles for parents
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image src={post.image} alt={post.alt} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 text-base mb-1 group-hover:text-indigo-700 transition-colors line-clamp-2">{post.title}</h4>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 