"use client"
import { useUser } from '@/src/context/user.provider'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import Image from 'next/image'
import React from 'react'
import SideBarOption from './SideBarOption'
import Link from 'next/link'
import { AdminLinks, userLink } from './constant'

const Sidebar = () => {
    const { user, isloading } = useUser();


    return (
        <div>
            <Card isFooterBlurred>
                {
                    user?.profilePhoto && <Image src={user?.profilePhoto!} width={300} height={400} alt="User" />
                }

                <CardBody>
                    <h2>Name: {user?.name}</h2>
                    <p>Email: {user?.email}</p>
                </CardBody>
                <CardFooter className=''>
                    <Link href="/profile/create-post" className='w-full p-2 rounded-lg bg-transparent bg-gray-800'>Create Post</Link>
                </CardFooter>
            </Card>
            <SideBarOption links={!isloading && user?.role === "admin" ? AdminLinks : userLink} key={user?.email}></SideBarOption>
        </div>
    )
}

export default Sidebar