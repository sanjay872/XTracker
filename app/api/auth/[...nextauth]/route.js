import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToDatabase from "@utils/database";
import User from "@models/User";

const handleNextAuth = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
        const user = await User.findOne({ email: session.user.email });
        session.user.id = user._id.toString();
      return session;
    },
    async signIn({ profile }) {
      
    await connectToDatabase();

      try {
        const user = await User.exists({ email: profile.email });
        if (!user) {
          await User.create({
            email: profile.email,
            username: profile.name.replace("", "").toLowerCase(),
            image: profile.picture,
          });
        }
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },
  },
});

export { handleNextAuth as GET, handleNextAuth as POST };
