import TutorRequestForm from "@/components/TutorRequestForm";

export default function RequestTutorPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Your Perfect Tutor
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll match you with the right tutor for your needs.
          </p>
        </div>
        <TutorRequestForm />
      </div>
    </div>
  );
} 