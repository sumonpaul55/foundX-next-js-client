import React from 'react'
import { Button } from '@nextui-org/button'
import { getRecentPosts } from '@/src/services/RecenetPosts'
import Container from '@/src/components/UI/Container'
import FoundedItemsCard from '@/src/components/UI/FoundedItemsCard'

const RecentlyFoundedItem = async () => {
    const data = await getRecentPosts()

    return (
        <Container>
            <div className='text-center'>
                <h2>Recently founded items</h2>
                <p className='mt-4'>A list of items that have been recently found and reporeted</p>
            </div>
            <div className='text-center mt-16'>
                <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4'>
                    {
                        data?.data?.map((item: any, idx: number) => (
                            <FoundedItemsCard post={item} key={idx} />
                        ))
                    }
                </div>
                <Button>View All</Button>
            </div>
        </Container>
    )
}

export default RecentlyFoundedItem