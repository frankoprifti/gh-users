import UserScreen from '@/screens/UserScreen';
import React from 'react'

export default async function UserPage({ params }) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const paramsData = await params;
    const { username } = paramsData;

    const userReq = await fetch(`${baseUrl}/users/${username}`,
        {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
            }
        }
    )

    if (userReq.ok) {
        const data = await userReq.json();
        return (
            <UserScreen user={data} />
        )
    }
}
