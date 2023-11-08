import React from 'react';
import { client } from '../lib/sanity';

async function getPosts() {
  const query = `*[_type == "post"]`
  const data = await client.fetch(query)

  return data
}

const Blogs = () => {
  return (
    <div>
      <h1>Blogs page</h1>
    </div>
  );
}

export default Blogs;
