"use client"
import { TFounditemsElements } from '@/src/types';
import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react'

const CardSkeleton = () => {


    return (
        <>
            <Card isFooterBlurred className='h-[300px] w-full'>
                <CardHeader>
                    <Skeleton> <p className='absolute top-1 right-1 p-2 bg-black rounded-full text-tiny uppercase font-bold tex-white'></p></Skeleton>
                </CardHeader>
                <Skeleton>
                    <h2 className='absolute text-white  md:text-lg rounded-lg top-5 left-1 bg-black p-1 bg-opacity-60 z-20'></h2>
                </Skeleton>
                <CardFooter className="justify-between border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] bg-black bg-opacity-60 shadow-small ml-1 z-10">
                    <Skeleton>
                        <div className='justify-start flex flex-col items-start w-full'>
                            <p className="text-tiny text-white/80 font-semibold"></p>
                            <p className='text-sm font-thin'></p>
                        </div>
                    </Skeleton>
                    <Skeleton>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Details
                        </Button>
                    </Skeleton>
                </CardFooter>
            </Card>
        </>

    )
}

export default CardSkeleton