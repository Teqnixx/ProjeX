// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Secret for JWT encoding
  session: {
    strategy: "jwt", // Use JWT to manage sessions
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the user data in the token
      if (account && user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the token's user data to the session
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
});
