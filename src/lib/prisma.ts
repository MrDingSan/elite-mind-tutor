import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NEXT_RUNTIME === "edge") {
  // Only import D1 adapter if running on Edge
  // @ts-ignore
  const { PrismaD1 } = require('@prisma/adapter-d1');
  // @ts-ignore
  const d1 = new PrismaD1(process.env.DB as unknown as D1Database);
  prisma = new PrismaClient({ adapter: d1 });
} else {
  prisma = new PrismaClient();
}

export { prisma }; 