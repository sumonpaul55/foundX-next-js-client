import React from 'react'
import { Button } from '@nextui-org/button'
import { getRecentPosts } from '@/src/services/RecenetPosts'
import Container from '@/src/components/UI/Container'
import FoundedItemsCard from '@/src/components/UI/FoundedItemsCard'
import { Skeleton } from '@nextui-org/skeleton'
import CardSkeleton from '@/src/components/UI/CardSkeleton'

const LoadingRecentPost = async () => {

    return (
        <Container>
            <div className='text-center'>
                <Skeleton>
                    <h2>Recently founded items</h2>
                </Skeleton>
                <p className='mt-4'>A list of items that have been recently found and reporeted</p>
            </div>
            <div className='text-center mt-16'>
                <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4'>
                    {
                        [...Array(9)].map((_, idx) => (
                            <CardSkeleton key={idx}></CardSkeleton>
                        ))
                    }
                </div>
                <Button>View All</Button>
            </div>
        </Container>
    )
}

export default LoadingRecentPost