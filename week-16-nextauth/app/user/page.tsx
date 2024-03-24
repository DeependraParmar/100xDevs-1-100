import { nextauth_config } from '@/lib/auth';
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async() => {
    const session = await getServerSession(nextauth_config);
  return (
    <div>
        Server component
        {JSON.stringify(session)}
    </div>
  )
}

export default page
