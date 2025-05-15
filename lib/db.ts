import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import type { D1Database } from '@cloudflare/workers-types'

// ✅ Fix TypeScript error: "Element implicitly has an 'any' type"
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma ?? new PrismaClient({
  adapter: new PrismaD1(process.env.DB as unknown as D1Database),
})

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}
