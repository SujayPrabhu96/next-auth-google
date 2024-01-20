import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: `https://accounts.google.com/o/oauth2/auth?response_type=code&hd=${process.env.EMAIL_DOMAIN}`,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email && user.email.endsWith(process.env.EMAIL_DOMAIN)) {
        return true;
      }
      return false;
    },
  },
  adapter: PrismaAdapter(prisma),
});

export { handler as GET, handler as POST };
