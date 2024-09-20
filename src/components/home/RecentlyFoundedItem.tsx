import React from 'react'
import Container from '../UI/Container'
import { Button } from '@nextui-org/button'
import { getRecentPosts } from '@/src/services/RecenetPosts'

const RecentlyFoundedItem = async () => {
    const data = await getRecentPosts()
    console.log(data)
    return (
        <Container>
            <div className='text-center'>
                <h2>Recently founded items</h2>
                <p className='mt-4'>A list of items that have been recently found and reporeted</p>
            </div>
            <div className='text-center mt-16'>
                <div className='mb-10'>
                    {
                        data?.data?.map((item: any, idx: number) => (
                            <h2 key={idx}>{item.title}</h2>
                        ))
                    }
                </div>
                <Button>View All</Button>
            </div>
        </Container>
    )
}

export default RecentlyFoundedItem