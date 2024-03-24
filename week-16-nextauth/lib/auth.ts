import CredentialsProvider from "next-auth/providers/credentials";

export const nextauth_config = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' }
            },
            async authorize(credentials: any) {
                console.log(credentials);

                return {
                    id: 'user 01',
                    name: 'deependraparmar',
                    email: 'deependraparmar1@gmail.com',
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    }
}