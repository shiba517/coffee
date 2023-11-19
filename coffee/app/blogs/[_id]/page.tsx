import React from 'react';
import { client } from '@/app/lib/sanity';
import { parseISO, format } from 'date-fns';
import PortableTextInsert from '@/app/components/PortableTextInsert';

async function getBlog(params_id: any) {
  const query = `*[
      _type == "blog" && 
      _id == "${params_id}"
    ]`
    const data = await client.fetch(query)

    return data
}

const BlogPage = async ({params}: any) => {
  const findBlog = await getBlog(params._id)
  const blog = findBlog[0]

  const formattedDate = parseISO(blog._createdAt);

  return (
    <div className='px-4 py-14 md:py-4 bg-green-800'>
      <div>
        <h1 className='text-2xl font-semibold text-yellow-400'>{blog.title}</h1>
        <p>{blog.overview}</p>
        <div className='py-2'>
          <p className='text-xs italic'>{format(formattedDate, 'LLLL d, yyyy')}</p>
        </div>
      </div>
      
      <div className='bg-blue-900 py-0'>
        <PortableTextInsert value={blog.image}></PortableTextInsert>
      </div>
      <div className='pt-4 text-left'>
        <PortableTextInsert value={blog.content}></PortableTextInsert>
      </div>
    </div>
  );
}

export default BlogPage;
