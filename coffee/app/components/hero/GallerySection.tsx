// "use client"

import React from 'react';
import SubHeader from '../SubHeader';
import { Gallery, GallerySectionProps } from '@/app/lib/interface';
import Image from 'next/image';
import { urlFor } from '@/app/lib/sanityImageUrl';
import { PortableText } from '@portabletext/react';
import SwiperTest from '../EmblaCarouselComp';
import EmblaCarouselComp from '../EmblaCarouselComp';
import PortableTextInsert from '../PortableTextInsert';

const GallerySection = async (props: GallerySectionProps) => {
    const galleryData = props.data

    return (
        <div className='bg-slate-950'>
            <SubHeader title='Gallery' subtitle='Excepteur sint occaecat cupidatat non proident, sunt in culpa'></SubHeader>
            
            <div className='grid grid-cols-3 p-4 gap-2'>
                {galleryData.map((gallery: Gallery) => (
                    <div key={gallery._id} className='bg-green-400 text-black overflow-hidden aspect-square'>
                        <PortableTextInsert value={gallery.image}></PortableTextInsert>
                    </div>
                ))}
            </div>

            <EmblaCarouselComp data={props.data}></EmblaCarouselComp>
        </div>
    );
}

export default GallerySection;
