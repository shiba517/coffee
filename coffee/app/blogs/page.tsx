import React from 'react';
import { client } from '../lib/sanity';
import PageHeader from '../components/PageHeader';
import { Blog } from '../lib/interface';
import CustomBlogsCard from '../components/blogs/CustomBlogsCard';

async function getBlogs() {
  const query = `*[_type == "blog"]`
  const data = await client.fetch(query)

  return data
}

const BlogsPage = async () => {
  const blogsData = (await getBlogs()) as Blog[]

  return (
    <div>
      <PageHeader title='News'></PageHeader>

      <div className='py-6 grid grid-cols-2 p-4 gap-4'>
        {blogsData.map((blog: Blog) => (
          <CustomBlogsCard title={blog.title} overview={blog.overview} _id={blog._id}></CustomBlogsCard>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
