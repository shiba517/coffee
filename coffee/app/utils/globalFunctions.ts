import { client } from "../lib/sanity";

export async function getGallery() {
    const query = `*[_type == "gallery"]`
    const data = await client.fetch(query)
  
    return data
}