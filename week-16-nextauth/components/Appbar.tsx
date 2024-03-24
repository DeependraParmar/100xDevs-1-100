"use client";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Appbar = () => {
    const session = useSession();
    const router = useRouter();
    return (
        <div style={{ display: 'flex', gap: '1rem', border: '1px solid white' }}>
            <button onClick={() => {router.push('/signin')}}>SignIn</button>
            <button onClick={() => {signOut()}}>Logout</button>

            {
                JSON.stringify(session.data?.user?.name)
            }
        </div>
    )
}

export default Appbar
