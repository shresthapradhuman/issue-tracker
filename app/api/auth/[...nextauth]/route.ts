import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        "380067373305-jp3lahffmp5vua8ecjjjgsmi1l34dp5m.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
