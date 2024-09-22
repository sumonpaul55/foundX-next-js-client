"use client"
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='max-w-[500px] mx-auto p-4 md:p-7 border border-gray-800 rounded-2xl shadow mt-20'>
            <form action="">
                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                    <Input type="email" label="Email" />
                    <Input type="email" label="Email" placeholder="Enter your email" />
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage