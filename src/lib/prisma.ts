import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from '@prisma/adapter-d1';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Access the D1 instance from the environment
const d1 = new PrismaD1(process.env.DB as unknown as D1Database); // Ensure 'DB' is defined in your environment

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter: d1,
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 