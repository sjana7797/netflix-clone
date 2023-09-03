import { PrismaClient } from "database";

const prisma = global.prismaDb || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prismaDb = prisma;

export default prisma;
