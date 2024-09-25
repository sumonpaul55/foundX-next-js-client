import Sidebar from '@/src/components/navbars/Sidebar'
import Container from '@/src/components/UI/Container'
import React, { ReactNode } from 'react'

const userLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Container>
            <div className='flex w-full my-3 gap-12'>
                <div className='w-2/5'>
                    <Sidebar />
                </div>
                <div className='w-4/5'>
                    {children}
                </div>
            </div>
        </Container>
    )
}

export default userLayout