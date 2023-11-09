import Image from 'next/image'
import { client } from './lib/sanity'
import { Post } from './lib/interface'
import CustomButton from './components/CustomButton'

async function getPosts() {
  const query = `*[_type == "post"]`
  const data = await client.fetch(query)

  return data
}

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Home() {
  const postsData =(await getPosts()) as Post[]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-slate-200">
      <h1 className='text-4xl font-extrabold uppercase text-yellow-500'>Gearhead Garage</h1>
      <p>Rev Up Your Ride, Restore Your Pride</p>
      <div className='py-2'>
        <CustomButton title='Learn more' customCss='bg-red-500'></CustomButton>
        <CustomButton title='Contact' customCss='bg-red-500'></CustomButton>
      </div>

      {/* <h1>Coffee house DEV2</h1>
      <a href="/blogs">Blogs</a>
      {postsData.map((post) => (
        <p>{post.title}</p>
      ))} */}
    </main>
  )
}
