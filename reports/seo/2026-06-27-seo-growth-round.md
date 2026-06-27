# SEO Growth Round - 2026-06-27

## Summary

This round focused on fixing a canonical/domain signal issue and publishing new long-tail SEO articles for Singapore international school families.

## Findings

1. `https://elitemindtutor.com/robots.txt` and `https://elitemindtutor.com/sitemap.xml` were still pointing crawlers to `https://elite-mind-tutor.vercel.app`.
2. Search visibility appears very early-stage: a web search for `site:elitemindtutor.com` did not surface a healthy set of indexed pages.
3. The site has useful service pages, but the blog content footprint is still small. More long-tail educational articles are needed before the domain can compete for broad Singapore tuition queries.
4. The blog currently relies on manual post registration in `src/app/blog/page.tsx` and `src/app/sitemap.ts`, so every new article must update both.

## Actions Completed

1. Changed the default production site URL to `https://elitemindtutor.com`.
2. Replaced old `elite-mind-tutor.vercel.app` canonical, Open Graph, robots, and sitemap references with the custom domain.
3. Published a new article: `IB Math AA vs AI: Which Course Should Singapore International School Students Choose?`
4. Reformatted the IB Math AA vs AI article to match the existing static blog article layout.
5. Published the next priority article immediately: `IGCSE Math Tuition in Singapore: When Does Your Child Really Need Extra Help?`
6. Added the new articles to the blog index and generated sitemap route.
7. Added article structured data for both new posts.

## New Content

### Article 1

- URL: `/blog/ib-math-aa-vs-ai-singapore`
- Primary keyword: `IB Math AA vs AI Singapore`
- Secondary keywords: `IB Math tutor Singapore`, `IB math tuition Singapore`, `IB Math AA or AI`, `IB Math HL Singapore`
- Intent: Parents/students comparing IB math pathways and deciding whether they need tutoring support.
- Internal links: `/math-tuition`, `/ib-tuition`, `/request-tutor`

### Article 2

- URL: `/blog/igcse-math-tuition-singapore`
- Primary keyword: `IGCSE Math tuition Singapore`
- Secondary keywords: `IGCSE math tutor Singapore`, `IGCSE mathematics tuition`, `international school math tutor Singapore`
- Intent: Parents deciding whether their child needs IGCSE math support before mocks or final exams.
- Internal links: `/math-tuition`, `/igcse-tuition`, `/request-tutor`

## Next Priorities

1. Submit `https://elitemindtutor.com/sitemap.xml` in Google Search Console after deployment.
2. Add Google Search Console access to future rounds so ranking gaps can use real query, impression, and click data.
3. Build a reusable blog data source so future posts do not require editing multiple files.
4. Add FAQ schema to high-intent pages such as `/math-tuition`, `/ib-tuition`, and `/request-tutor`.
5. Create the next article around `IB Physics tutor Singapore`.
