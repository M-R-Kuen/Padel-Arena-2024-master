import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import dotenv from "dotenv";

dotenv.config();
//configuro las rutas del proveedor con mis variables de entorno
const authHandler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: `https://accounts.google.com/o/oauth2/auth/authorize?response_type=code&prompt=login`,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
});

export { authHandler as GET, authHandler as POST };
