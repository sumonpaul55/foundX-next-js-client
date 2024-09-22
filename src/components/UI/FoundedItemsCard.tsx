"use client"
import { TFounditemsElements } from '@/src/types';
import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react'

const FoundedItemsCard = ({ post }: { post: TFounditemsElements }) => {
    const { title, category, images, city, dateFound, _id, location } = post;


    return (
        <>
            <Card isFooterBlurred className='h-[300px] w-full'>
                <CardHeader>
                    <p className='absolute top-1 right-1 p-2 bg-black rounded-full text-tiny uppercase md:text-lg font-bold tex-white bg-opacity-60'>{category?.name}</p>

                </CardHeader>
                {
                    images?.map((tiem: string, idx: number) => (
                        <Image
                            key={idx}
                            alt="Woman listing to music"
                            className="object-cover absolute top-0 left-0 h-full"
                            height={700}
                            src={tiem}
                            width={400}
                        />
                    ))
                }
                <CardFooter className="justify-between border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] bg-black bg-opacity-60 shadow-small ml-1 z-10">
                    <div className='justify-start flex flex-col items-start w-full'>
                        <p className="text-tiny text-white/80 font-semibold">{location}</p>
                        <p className='text-sm font-thin'>{format(new Date(dateFound), "dd MMM yyyy")}</p>
                    </div>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                        Details
                    </Button>
                </CardFooter>
            </Card>
        </>

    )
}

export default FoundedItemsCard