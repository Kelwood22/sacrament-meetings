import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } =
  NextAuth({
    ...authConfig,

    providers: [
      Credentials({
        async authorize(credentials) {
          const parsed = z
            .object({
              email: z.string().email(),
              password: z.string().min(6),
            })
            .safeParse(credentials);

          if (!parsed.success) {
            return null;
          }

          const { email, password } =
            parsed.data;

          if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
          ) {
            return {
              id: "1",
              email,
              name: "Bishopric",
            };
          }

          return null;
        },
      }),
    ],
  });