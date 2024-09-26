import React from 'react'
import Container from '../UI/Container'
import { Input } from '@nextui-org/input'
import { SearchIcon } from '../../asstes/icons'

export const Home = () => {
    return (
        <section className="h-[70vh] bg-[url('/glases.jpg')] relative bg-cover bg-center">
            <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-0 dark:bg-opacity-40'></div>
            <div className='absolute w-full h-full'>
                <Container className=''>
                    <div className='max-w-[600px] mx-auto'>
                        <Input aria-label='Search' classNames={{
                            innerWrapper: "bg-default-200",
                            input: "text-sm"
                        }} size='lg' placeholder='Search...'
                            startContent={
                                <SearchIcon />
                            }
                            labelPlacement='outside'
                            type='text'
                        />
                    </div>
                </Container>
            </div>

        </section>
    )
}
