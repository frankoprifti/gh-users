import React from 'react'

const fakeArray = new Array(12).fill(0).map((_, i) => i)

export default function Loading() {
    return (
        <div>
            <div className='mx-4 mt-4 bg-gray-800 px-5 rounded-xl'>
                <div className='w-full h-[44px] outline-0' />
            </div>
            <div className='grid grid-cols-4 gap-4 p-4'>{fakeArray.map((user) => <div key={user} className='w-full min-h-[184px] bg-gray-700 animate-pulse' />)}</div>
        </div>
    )
}
