"use client"
import FXForm from '@/src/components/form/FXForm'
import { Button } from '@nextui-org/button'
import React from 'react'
import { FxInput } from '../../components/form/FxInput'
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import loginValidationSchema from '@/src/schemas/login.schema'


const Registration = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <div className='max-w-[500px] mx-auto p-4 md:p-7 border border-gray-800 rounded-2xl shadow mt-20'>
            <FXForm onSubmit={onSubmit}>
                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                    <FxInput type='text' label='Name' name='name' />
                    <FxInput type='email' name='email' label='Email' />
                    <FxInput type='text' name='phone' label='Phone' />
                    <FxInput type='password' name='password' label='Password' />
                    <Button type='submit'>Login</Button>
                </div>
            </FXForm>
        </div>
    )
}

export default Registration