import React from 'react'
import Container from '../UI/Container'
import { Button } from '@nextui-org/button'

const RecentlyFoundedItem = async () => {
    const res = await fetch("http://localhost:5000/api/v1/items?sortBy=createdAt&limit=9")
    const data = await res.json()
    return (
        <Container>
            <div className='text-center'>
                <h2>Recently founded items</h2>
                <p className='mt-4'>A list of items that have been recently found and reporeted</p>
            </div>
            <div className='text-center mt-16'>
                <Button>View All</Button>
            </div>
        </Container>
    )
}

export default RecentlyFoundedItem