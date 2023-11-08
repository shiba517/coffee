import Image from 'next/image'
import { client } from './lib/sanity'
import { Post } from './lib/interface'

async function getPosts() {
  const query = `*[_type == "post"]`
  const data = await client.fetch(query)

  return data
}

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Home() {
  const postsData =(await getPosts()) as Post[]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>New and not final nextjs app</h1>
      <a href="/blogs">Blogs</a>
      {postsData.map((post) => (
        <p>{post.title}</p>
      ))}
    </main>
  )
}
