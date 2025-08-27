import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function UserScreen({ user }) {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Link href='/' className='absolute top-4 left-4'>Back</Link>
            <div className='bg-gray-800 rounded-2xl p-4 shadow-sm shadow-amber-100 flex flex-col items-center gap-2'>
                <Image className='w-20 h-20 rounded-full' src={user.avatar_url} width={80} height={80} alt={user.login + ' avatar'} />
                <div><b>Name:</b> {user.name}</div>
                {user.bio && <div><b>Bio:</b><div className='max-w-[300px]'>{user.bio}</div></div>}
                {user.location && <div><b>Location:</b> {user.location}</div>}
                <div><b>Followers:</b> {user.followers}</div>
                <div><b>Following:</b> {user.following}</div>
            </div>
        </div>
    )
}
