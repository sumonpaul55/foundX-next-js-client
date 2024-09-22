"use client"
import FXForm from '@/src/components/form/FXForm'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'
import { FxInput } from './FxInput'

const LoginPage = () => {
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className='max-w-[500px] mx-auto p-4 md:p-7 border border-gray-800 rounded-2xl shadow mt-20'>
            <FXForm onSubmit={onSubmit}>
                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                    {/* <Input type="email" label="Email" name='email' /> */}
                    <FxInput type='email' name='email' />
                    <FxInput type='password' name='password' />
                    <Button type='submit'>Login</Button>
                </div>
            </FXForm>
        </div>
    )
}

export default LoginPage