import jsonwebtoken from 'jsonwebtoken'
import { NextAuthOptions, User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { JWT } from 'next-auth/jwt'
import { getServerSession } from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	// jwt: {
	//   encode: ({secret, token}) => { },
	//   decode: async ({secret, token}) => { },
	// },
	theme: {
		colorScheme: 'light',
		logo: '/logo.png',
	},
	callbacks: {
		async session({ session }) {
			return session
		},
		async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true
			} catch (error) {
				console.log(error)
				return false
			}
		},
	},
}
