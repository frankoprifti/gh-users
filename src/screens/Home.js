'use client';
import User from '@/components/User'
import React, { useDeferredValue, useState, useMemo, useEffect, useCallback } from 'react'

export default function Home({ users: prefetchedUsers }) {
    const initialUsers = useMemo(() => prefetchedUsers, [prefetchedUsers])
    const [users, setUsers] = useState(initialUsers);
    const [page, setPage] = useState(1);

    const [searchVal, setSearchVal] = useState('');
    const deferedSearchVal = useDeferredValue(searchVal);

    const filteredUsers = useMemo(() => {
        if (deferedSearchVal) {
            return users.filter(user => user.login.includes(deferedSearchVal))
        } else {
            return users
        }
    }, [deferedSearchVal, users])


    const fetchMore = useCallback(
        async () => {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const usersReq = await fetch(`${baseUrl}/users?since=${page * 30}&per_page=30`, {
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
                }

            })
            if (usersReq.ok) {
                const newData = await usersReq.json()
                setUsers((prev) => [...prev, ...newData])
                setPage(prev => prev + 1)
            }
        },
        [page],
    )


    const isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    const trackScrolling = () => {
        const wrappedElement = document.getElementById('home-scroll');
        if (isBottom(wrappedElement)) {
            fetchMore();

        }
    };
    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener('scroll', trackScrolling);
        }

    }, [])







    return (
        <div id='home-scroll'>
            <div className='mx-4 mt-4 bg-gray-800 px-5 rounded-xl'>
                <input className='w-full h-[44px] outline-0' placeholder='Search for username...' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
            </div>
            <div className='grid grid-cols-4 gap-4 p-4'>{filteredUsers.map(user => <User key={user.login} user={user} />)}</div>
        </div>
    )
}
