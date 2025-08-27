import React from 'react'
import Link from 'next/link'

export default function Loading() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Link href='/' className='absolute top-4 left-4'>Back</Link>
            <div className='bg-gray-800 w-[200px] rounded-2xl p-4 shadow-sm shadow-amber-100 flex flex-col items-center gap-2  animate-pulse'>
                <div className='w-20 h-20 rounded-full bg-amber-200 animate-pulse' width={80} height={80} />
                <div className='h-4 w-full bg-gray-900 animate-pulse' />
                <div className='h-4 w-full bg-gray-900 animate-pulse' />
                <div className='h-4 w-full bg-gray-900 animate-pulse' />
                <div className='h-4 w-full bg-gray-900 animate-pulse' />
            </div>
        </div>
    )
}
