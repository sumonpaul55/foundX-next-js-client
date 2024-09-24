"use client"
import FXForm from '@/src/components/form/FXForm'
import { Button } from '@nextui-org/button'
import React, { useEffect } from 'react'
import { FxInput } from '../../../components/form/FxInput'
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { useUserRegistration } from '@/src/hooks/auth.hook'
import Link from 'next/link'
import LoadingBlur from '@/src/components/UI/LoadingBlur'
import { zodResolver } from '@hookform/resolvers/zod'


const Registration = () => {
    const { mutate: handleUserRegistration, isPending } = useUserRegistration();

    // useEffect(() => {
    //     if (isPending) {
    //         // handle loading
    //     }
    // }, [])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const userData = { ...data, profilePhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }
        handleUserRegistration(userData)
    }

    return (
        <>
            {isPending ? <LoadingBlur />
                : <div className='max-w-[500px] mx-auto p-4 md:p-7 border border-gray-800 rounded-2xl shadow mt-20'>
                    <FXForm onSubmit={onSubmit}>
                        <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                            <FxInput type='text' label='Name' name='name' />
                            <FxInput type='email' name='email' label='Email' />
                            <FxInput type='text' name='mobileNumber' label='Phone' />
                            <FxInput type='password' name='password' label='Password' />
                            <Button type='submit'>Login</Button>
                        </div>
                    </FXForm>
                    <p className='py-3 text-sm'>Do you have account? <Link className='text-pink-600' href="/login">Login</Link></p>
                </div>
            }
        </>
    )
}

export default Registration