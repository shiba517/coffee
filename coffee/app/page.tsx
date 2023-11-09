import { client } from './lib/sanity'
import { Post } from './lib/interface'
import ServiceSection from './components/hero/ServiceSection'
import HeroSection from './components/hero/HeroSection'
import BlogsSection from './components/hero/BlogsSection'

async function getPosts() {
  const query = `*[_type == "post"]`
  const data = await client.fetch(query)

  return data
}

export const revalidate = 60 // revalidate this page every 60 seconds

const tempcss = 'flex min-h-screen flex-col items-center justify-center p-4 bg-black text-slate-200'

export default async function Home() {
  const postsData =(await getPosts()) as Post[]

  return (
    <main className="min-h-screen bg-black text-slate-200 text-center">
            <BlogsSection></BlogsSection>


      <HeroSection></HeroSection>
      
      <ServiceSection></ServiceSection>


      {/* <h1>Coffee house DEV2</h1>
      <a href="/blogs">Blogs</a>
      {postsData.map((post) => (
        <p>{post.title}</p>
      ))} */}
    </main>
  )
}
