// "use client"

import React from 'react';
import SubHeader from '../SubHeader';
import { Gallery, GallerySectionProps } from '@/app/lib/interface';
import Image from 'next/image';
import { urlFor } from '@/app/lib/sanityImageUrl';
import { PortableText } from '@portabletext/react';

const GallerySection = async (props: GallerySectionProps) => {
    const galleryData = props.data

    const getDataImageValue = {
        types: {
            image: ({value}: {value: any}) => (
                <Image 
                alt='random' 
                src={urlFor(value).url()} 
                width={0} 
                height={0}
                sizes="100%"
                style={{ height: '100%', width: '100%', margin: 'auto', objectFit: 'none' }}
                ></Image>
            )
        }
    }

    return (
        <div className='bg-slate-950'>
            <SubHeader title='Gallery' subtitle='Excepteur sint occaecat cupidatat non proident, sunt in culpa'></SubHeader>
            
            <div className='grid grid-cols-3 p-4 gap-2'>
                {galleryData.map((gallery: Gallery) => (
                    <div key={gallery._id} className='bg-green-400 text-black overflow-hidden'>
                    </div>
                ))}
            </div>
            
            <div className='grid grid-cols-3 p-4 gap-2'>
                {galleryData.map((gallery: Gallery) => (
                    <div key={gallery._id} className='bg-green-400 text-black overflow-hidden aspect-square'>
                        {/* <p>{new Date(gallery._createdAt).toISOString().split('T')[0] }</p> */}
                        <PortableText 
                        value={gallery.image}
                        components={getDataImageValue}
                        ></PortableText>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GallerySection;
