import { type PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismaDb: PrismaClient;
  }
}
