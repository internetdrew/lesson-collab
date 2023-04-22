import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { CredentialsProvider } from 'next-auth/providers';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
