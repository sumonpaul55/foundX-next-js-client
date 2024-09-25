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
                    user?.profilePhoto && <Image src={user?.profilePhoto!} className='w-full' width={300} height={400} alt="User" />
                }
                <CardBody>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2>Name: {user?.name}</h2>
                            <p>Email: {user?.email}</p>
                        </div>
                        <p>Role: {user?.role}</p>
                    </div>
                </CardBody>
                <CardFooter className=''>
                    <Link href="/profile/create-post" className='w-full p-2 rounded-lg bg-transparent bg-gray-500'>Create Post</Link>
                </CardFooter>
            </Card>
            <SideBarOption links={!isloading && user?.role === "ADMIN" ? AdminLinks : userLink} key={user?.email}></SideBarOption>
        </div>
    )
}

export default Sidebar