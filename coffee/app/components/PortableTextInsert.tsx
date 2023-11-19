import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { PortableTextInsertProps } from "../lib/interface";
import Image from "next/image";
import { urlFor } from '@/app/lib/sanityImageUrl';

const PortableTextInsert = (props: PortableTextInsertProps) => {
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
    <PortableText
    value={props.value}
    components={getDataImageValue}
    ></PortableText>
  );
}

export default PortableTextInsert;
