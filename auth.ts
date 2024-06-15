import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { SupabaseAdapter } from "@auth/supabase-adapter";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string; // Add custom property here
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string; // Add custom property here
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Discord({
      profile(profile) {
        return { role: profile.role ?? "GOŚĆ" };
      },
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  events: {
    createUser: async (message) => {
      const response = await fetch(process.env.NEXTJS_PAGE + "/api/auth/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: message.user.email }),
      });
      const data = await response.json();
    },
  },
});
