import React from 'react';
import PageHeader from '../components/PageHeader';
import { getGallery } from '../utils/globalFunctions';
import { Gallery } from '../lib/interface';
import PortableTextInsert from '../components/PortableTextInsert';

const GalleryPage = async () => {
  const galleryData = (await getGallery()) as Gallery[]

  return (
    <div>
      <PageHeader title='Gallery page'></PageHeader>
      <div className='grid grid-cols-2 p-4 gap-2'>
        {galleryData.map((gallery: Gallery) => (
        <div key={gallery._id} className='bg-green-400 text-black overflow-hidden aspect-video'>
            <PortableTextInsert value={gallery.image}></PortableTextInsert>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default GalleryPage;
