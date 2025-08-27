import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function User({ user }) {
    return (
        <Link href={`/users/${user.login}`} className='bg-gray-700 rounded-2xl flex flex-col items-center p-4 hover:bg-gray-900 transition-colors cursor-pointer'>
            <Image className='w-20 h-20 rounded-full' src={user.avatar_url} width={80} height={80} alt={user.login + ' avatar'} />
            <h3>{user.login}</h3>
            <div>Github URL: <div className='text-amber-600' >{user.html_url}</div></div>
        </Link>
    )
}
