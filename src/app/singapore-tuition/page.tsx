import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaClipboardCheck,
  FaComments,
  FaGraduationCap,
  FaSearch,
  FaStar,
  FaUserGraduate,
  FaWhatsapp,
} from "react-icons/fa";

const pageUrl = "https://elitemindtutor.com/singapore-tuition";

export const metadata: Metadata = {
  title: "Singapore Tuition Agency for IB & IGCSE | EliteMind Tutor",
  description:
    "Find private tutors in Singapore for IB, IGCSE, Math, Science, English, Economics, and international school exam preparation. Request a tutor match within 24 hours.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Singapore Tuition Agency for IB & IGCSE | EliteMind Tutor",
    description:
      "Private tuition matching in Singapore for international school students preparing for IB, IGCSE, and subject exams.",
    url: pageUrl,
    type: "website",
  },
};

const matchingSteps = [
  {
    icon: <FaSearch className="h-6 w-6 text-navy" />,
    title: "Tell us the goal",
    text: "Share your child's school, curriculum, subject gaps, target grade, preferred timing, and whether you prefer online or home tuition.",
  },
  {
    icon: <FaClipboardCheck className="h-6 w-6 text-navy" />,
    title: "We shortlist tutors",
    text: "We look for tutors with relevant IB, IGCSE, or international school experience instead of sending a generic list.",
  },
  {
    icon: <FaComments className="h-6 w-6 text-navy" />,
    title: "You review the match",
    text: "We explain why the tutor fits, share next steps, and help coordinate a first lesson with clear expectations.",
  },
  {
    icon: <FaStar className="h-6 w-6 text-navy" />,
    title: "Track improvement",
    text: "The tuition plan focuses on weak topics, exam technique, confidence, and parent-visible progress over time.",
  },
];

const subjectLinks = [
  { label: "IB Tuition", href: "/ib-tuition", description: "SL and HL support for IB Diploma students" },
  { label: "IGCSE Tuition", href: "/igcse-tuition", description: "Core and Extended exam preparation" },
  { label: "Math Tuition", href: "/math-tuition", description: "IB Math AA/AI, IGCSE Math, problem solving" },
  { label: "Physics Tuition", href: "/physics-tuition", description: "Mechanics, electricity, waves, and exam practice" },
  { label: "Chemistry Tuition", href: "/chemistry-tuition", description: "Organic, physical, inorganic, and lab concepts" },
  { label: "Biology Tuition", href: "/biology-tuition", description: "Genetics, ecology, human physiology, and data response" },
  { label: "English Tuition", href: "/english-tuition", description: "Essay writing, literature analysis, and language skills" },
  { label: "Economics Tuition", href: "/economics-tuition", description: "Micro, macro, global economics, and evaluation" },
  { label: "Online Tuition", href: "/online-tuition", description: "Flexible tuition for busy international school schedules" },
];

const trustPoints = [
  "Specialist focus on international school, IB, and IGCSE students in Singapore",
  "Tutor matching based on curriculum fit, not just subject availability",
  "One-to-one support for concept gaps, exam technique, coursework, and confidence",
  "Fast parent communication by WhatsApp with clear next steps",
];

const faqs = [
  {
    question: "How quickly can I get a private tutor in Singapore?",
    answer:
      "Most families can receive a suitable tutor recommendation within 24 hours after sharing the student's curriculum, subject, level, location, and preferred schedule.",
  },
  {
    question: "Do you provide home tuition and online tuition?",
    answer:
      "Yes. We can help arrange home tuition in Singapore or online tuition depending on the student's schedule, learning style, and subject needs.",
  },
  {
    question: "What subjects do your tutors cover?",
    answer:
      "We cover major IB and IGCSE subjects including Mathematics, Physics, Chemistry, Biology, English, Economics, and other international school exam subjects.",
  },
  {
    question: "How are tuition rates decided?",
    answer:
      "Rates depend on the student's level, subject difficulty, tutor experience, lesson format, and location. We confirm the rate before lessons begin so parents can make a clear decision.",
  },
];

export default function SingaporeTuitionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Singapore Tuition and Private Tutor Matching",
    provider: {
      "@type": "EducationalOrganization",
      name: "EliteMind Tutor",
      url: "https://elitemindtutor.com",
    },
    areaServed: "Singapore",
    educationalProgramMode: ["Online", "In-person"],
    description:
      "Private tutor matching for IB, IGCSE, and international school students in Singapore.",
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/students/private-tutor.jpg"
            alt="Private tutor helping a student in Singapore"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
              Singapore tuition agency for international school families
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Singapore Tuition & Private Tutors for IB and IGCSE Students
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90">
              Get matched with a private tutor in Singapore who understands your child's curriculum, exam timeline, and target grade. We focus on IB, IGCSE, and international school subject support.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-navy shadow-sm transition-colors hover:bg-gray-100"
              >
                Request a Tutor Match
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/6591811623"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-navy"
              >
                WhatsApp Us
                <FaWhatsapp className="ml-2 h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-white/75">
              Matching is free. We confirm tutor fit and rates before lessons start.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Why parents search for tuition agencies</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The best tuition pages answer the parent's decision quickly
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Parents searching for Singapore tutor or Singapore tuition usually want three things: a qualified tutor, a clear matching process, and confidence that the tutor understands the right syllabus. This page brings those answers together instead of hiding them across separate pages.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <FaCheckCircle className="mt-1 h-5 w-5 flex-none text-navy" />
                    <p className="text-sm leading-6 text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-navy/10 p-4">
                  <FaUserGraduate className="h-8 w-8 text-navy" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Best fit for</p>
                  <h3 className="text-2xl font-bold text-gray-900">International school students</h3>
                </div>
              </div>
              <dl className="mt-8 space-y-5">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <dt className="font-medium text-gray-600">Curricula</dt>
                  <dd className="font-semibold text-gray-900">IB, IGCSE, school exams</dd>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <dt className="font-medium text-gray-600">Subjects</dt>
                  <dd className="font-semibold text-gray-900">Math, Science, English, Economics</dd>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <dt className="font-medium text-gray-600">Format</dt>
                  <dd className="font-semibold text-gray-900">Home or online tuition</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-600">Matching time</dt>
                  <dd className="font-semibold text-gray-900">Usually within 24 hours</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">How matching works</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A clearer process than scrolling through tutor profiles alone
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We keep the process simple because parents usually come to us when exams are close, confidence is low, or the current learning support is not working.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {matchingSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
                  {step.icon}
                </div>
                <p className="text-sm font-semibold text-navy">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Popular tuition searches</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tuition support by curriculum and subject
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Strong tuition agency competitors rank well partly because every major subject and level is easy to find. This hub gives Google and parents a cleaner path into our specialist pages.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center text-base font-semibold text-navy hover:text-navy-600">
              View all services
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {subjectLinks.map((subject) => (
              <Link
                key={subject.href}
                href={subject.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-navy/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-navy">{subject.label}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{subject.description}</p>
                  </div>
                  <FaArrowRight className="mt-1 h-4 w-4 flex-none text-navy transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Tuition rates and fit</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transparent expectations before the first lesson
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tuition rates in Singapore vary by level, subject, tutor background, lesson location, and whether the student needs general weekly support or urgent exam preparation. Instead of forcing a one-size-fits-all package, we confirm the recommended tutor and rate before you proceed.
            </p>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <h3 className="text-xl font-bold text-gray-900">What affects tutor recommendations?</h3>
              <ul className="mt-5 space-y-3 text-gray-700">
                <li className="flex gap-3"><FaCheckCircle className="mt-1 h-4 w-4 flex-none text-navy" />IB HL and IGCSE Extended subjects usually need stronger syllabus experience.</li>
                <li className="flex gap-3"><FaCheckCircle className="mt-1 h-4 w-4 flex-none text-navy" />Exam urgency changes the plan: crash revision is different from long-term foundation building.</li>
                <li className="flex gap-3"><FaCheckCircle className="mt-1 h-4 w-4 flex-none text-navy" />A good personality fit matters because consistency often decides results.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white shadow-xl">
            <FaGraduationCap className="h-10 w-10 text-white/90" />
            <h3 className="mt-6 text-2xl font-bold">Need a tutor recommendation?</h3>
            <p className="mt-4 leading-7 text-white/85">
              Send us the student's level, school, subject, target grade, and preferred lesson time. We will suggest the best next step and explain why.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/request-tutor"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-gray-100"
              >
                Request Tutor Now
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/6591811623"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
              >
                WhatsApp +65 91811623
                <FaWhatsapp className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBookOpen className="mx-auto h-10 w-10 text-navy" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Singapore tuition FAQs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quick answers for parents comparing tuition agencies and private tutors in Singapore.
            </p>
          </div>
          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
