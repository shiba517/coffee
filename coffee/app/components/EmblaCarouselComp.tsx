"use client"

import React from 'react';

import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselCompProps, Gallery } from '../lib/interface';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/app/lib/sanityImageUrl';
import PortableTextInsert from './PortableTextInsert';

const EmblaCarouselComp = (props: EmblaCarouselCompProps) => {
  const [emblaRef] = useEmblaCarousel()
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
    <div className="embla" ref={emblaRef}>
      <div className="embla__container bg-black text-slate-200">
      {galleryData.map((gallery: Gallery) => (
          <div key={gallery._id} className='embla__slide bg-green-400 text-black overflow-hidden aspect-video'>
              <PortableTextInsert
              value={gallery.image}
              ></PortableTextInsert>
          </div>
      ))}
      </div>
    </div>
  )
}

export default EmblaCarouselComp;
