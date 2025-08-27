'use client';

export default function Error({ error }) {
    return (
        <div>Error loading users {JSON.stringify(error.message)}</div>
    )
}
