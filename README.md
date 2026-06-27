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
   TELEGRAM_BOT_TOKEN="your_telegram_bot_token"
   TELEGRAM_CHAT_ID="your_telegram_chat_id"
   ```
   `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are used for tutor request alerts and SEO scorecard summaries. Set the same variables in Cloudflare Pages for production.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Telegram Notifications

- Tutor request submissions send a Telegram alert automatically after the request is stored.
- SEO runs can send a scorecard/report summary with:
  ```bash
  npm run seo:notify
  ```
- To send a specific report:
  ```bash
  npm run seo:notify -- reports/seo/2026-06-27-seo-growth-round.md
  ```

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
