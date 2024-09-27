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
        console.log('lightGallery has been initialized');
    };
    return (
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            {
                images?.length > 0 && images?.map(img => (
                    <Link href={img}>
                        <Image src={img} alt="Image" height={500} width={500} />
                    </Link>
                ))
            }

        </LightGallery>
    )
}

export default ImageGallery