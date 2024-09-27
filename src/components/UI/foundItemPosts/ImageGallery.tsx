"use client"
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';
import Image from 'next/image';

const ImageGallery = ({ images }: { images: string[] }) => {
    const onInit = () => {
        // console.log('lightGallery has been initialized');
    };
    return (
        <LightGallery
            elementClassNames={`grid items-center gap-1 ${images?.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"}`}
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            {
                images?.length > 0 && images?.map((img, idx: number) => (
                    <Link href={img} key={idx} className={`w-full ${images?.length === 3 && idx === 0 ? "col-span-2" : "col-span-1"}`}>
                        <Image src={img} alt={`${img + idx}`} height={300} width={500} className='w-full h-[400] object-cover object-center' />
                    </Link>
                ))
            }

        </LightGallery>
    )
}

export default ImageGallery