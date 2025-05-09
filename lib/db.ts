import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient({
  adapter: new PrismaD1(process.env.DB as D1Database),
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
} 