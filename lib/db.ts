import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import { D1Database } from '@cloudflare/workers-types'

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DB as string,
    },
  },
  adapter: new PrismaD1(process.env.DB as D1Database),
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
} 