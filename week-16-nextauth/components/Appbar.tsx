"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

const Appbar = () => {
    const session = useSession();
    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => {signIn()}}>SignIn</button>
            <button onClick={() => {signOut()}}>Logout</button>

            {
                JSON.stringify(session)
            }
        </div>
    )
}

export default Appbar
