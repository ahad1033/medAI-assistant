import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

import { MongoDBAdapter } from "@auth/mongodb-adapter";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "./mongoDb";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const client = await clientPromise;
        const users = client.db().collection("users");

        const user = await users.findOne({ email: credentials.email });

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" || account?.provider === "facebook") {
        const client = await clientPromise;
        const users = client.db().collection("users");

        // Check if user already exists with this email
        const existingUser = await users.findOne({ email: user.email });

        if (existingUser) {
          // Update the existing user with OAuth provider info if not already linked
          const providerKey = `${account.provider}Id`;
          if (!existingUser[providerKey]) {
            await users.updateOne(
              { email: user.email },
              {
                $set: {
                  [providerKey]: account.providerAccountId,
                  image: user.image || existingUser.image,
                  name: user.name || existingUser.name,
                },
              }
            );
          }
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
  },
};
