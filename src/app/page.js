import Home from "@/screens/Home";
export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const usersReq = await fetch(`${baseUrl}/users?since=1&per_page=30`, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    }
  })

  if (usersReq.ok) {
    const users = await usersReq.json();
    return (
      <Home users={users} />
    );
  }
  else {
    throw new Error(usersReq.statusText);
  }
}
