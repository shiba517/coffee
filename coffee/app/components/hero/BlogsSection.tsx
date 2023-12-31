// "use client"  

import React from 'react';
import SubHeader from '../SubHeader';
import CustomBlogsCard from '../blogs/CustomBlogsCard';
import CustomButton from '../CustomButton';
import { client } from '@/app/lib/sanity';
import { Blog, BlogSectionProps } from '@/app/lib/interface';

async function getBlogs() {
  const query = `*[_type == "blog"]`
  const data = await client.fetch(query)

  return data
}

const BlogsSection = async (props: BlogSectionProps) => {
  const blogsData = props.data

  return (
    <div className=' bg-slate-200 text-black pb-4'>
      <SubHeader title='Latest news' subtitle='Porro quisquam debitis nemo animi? Voluptates dolore est et quae'></SubHeader>
        <div className='grid grid-cols-2 p-4 gap-4'>
          {blogsData.map((blog: Blog) => (
            <CustomBlogsCard title={blog.title} overview={blog.overview} _id={blog._id}></CustomBlogsCard>
          ))}
        </div>
        <div>
            <CustomButton title='read more blogs' customCss='bg-yellow-400 px-4'></CustomButton>
        </div>
    </div>
  );
}

export default BlogsSection;
