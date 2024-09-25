"use client"
import Link from 'next/link';
import React from 'react'


type LinkItems = {
    href: string;
    label: string;
}
const SideBarOption = ({ links }: { links: LinkItems[] }) => {

    return (
        <div className='flex flex-col gap-2 mt-4'>
            {
                links?.map((link: LinkItems, idx: number) => {
                    return <Link key={idx} href={link?.href} className='bg-gray-800 p-2 rounded-lg'>{link?.label}</Link>
                })
            }
        </div>
    )
}

export default SideBarOption