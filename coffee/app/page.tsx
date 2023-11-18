import { client } from './lib/sanity'
import { Blog, Gallery, Post } from './lib/interface'
import ServiceSection from './components/hero/ServiceSection'
import HeroSection from './components/hero/HeroSection'
import BlogsSection from './components/hero/BlogsSection'
import GallerySection from './components/hero/GallerySection'

async function getPosts() {
  const query = `*[_type == "post"]`
  const data = await client.fetch(query)

  return data
}

async function getBlogs() {
  const query = `*[_type == "blog"]`
  const data = await client.fetch(query)

  return data
}

async function getGallery() {
  const query = `*[_type == "gallery"]`
  const data = await client.fetch(query)

  return data
}

export const revalidate = 60 // revalidate this page every 60 seconds


export default async function Home() {
  const postsData =(await getPosts()) as Post[]
  const galleryData = (await getGallery()) as Gallery[]
  const blogsData = (await getBlogs()) as Blog[]

  return (
    <>
    <HeroSection></HeroSection>
    <ServiceSection></ServiceSection>
    <BlogsSection data={blogsData}></BlogsSection>
    <GallerySection data={galleryData.slice(0, 9)}></GallerySection>
    </>
  )
}
