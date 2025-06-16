// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// احفظ authOptions كمجرد ثُغَير محلي:
const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // هنا ضيف موفّري الدخول لديك
  ],
};

// أنشئ المعالج:
const handler = NextAuth(authOptions);

// صَدّر فقط دوال HTTP:
export { handler as GET, handler as POST };
