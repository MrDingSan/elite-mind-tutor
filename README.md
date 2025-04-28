# Elite Mind Tutor

A premium tutoring platform connecting qualified tutors with international school students in Singapore, specializing in IGCSE and IB curriculum.

## Features

- Tutor registration and profile management
- Parent/Student registration and request submission
- Curriculum information (IGCSE and IB)
- Secure authentication system
- Modern, responsive design
- Real-time messaging system

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (Database ORM)
- NextAuth.js (Authentication)
- React Hook Form (Form handling)
- Zod (Schema validation)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="your_database_url"
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         # Reusable components
├── lib/               # Utility functions and configurations
├── prisma/            # Database schema and migrations
└── types/             # TypeScript type definitions
```

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is proprietary and confidential.
