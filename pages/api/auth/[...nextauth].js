import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
    providers: [
        CognitoProvider({
          clientId: process.env.COGNITO_CLIENT_ID,
          clientSecret: process.env.COGNITO_CLIENT_SECRET,
          issuer: process.env.COGNITO_ISSUER,
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
          clientId: process.env.FACEBOOK_CLIENT_ID,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
      ],
      secret: process.env.SECRET,
      session: {
        jwt: true,
      },
      pages: {
        signIn: '../../login' },
      debug: true,
})