import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { SupabaseAdapter } from "@auth/supabase-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Discord],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
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
