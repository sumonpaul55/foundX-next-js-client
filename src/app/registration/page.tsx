"use client"
import FXForm from '@/src/components/form/FXForm'
import { Button } from '@nextui-org/button'
import React from 'react'
import { FxInput } from '../../components/form/FxInput'
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { registerUser } from '@/src/services/authService'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'


const Registration = () => {
    const { mutate: handleUserRegistration, isError, isPending, isSuccess } = useMutation({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            toast.success("Registered successfully")
        },
        onError: (error: any) => {
            toast.error(error)
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const userData = { ...data, profilePhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }
        handleUserRegistration(userData)
    }
    return (
        <div className='max-w-[500px] mx-auto p-4 md:p-7 border border-gray-800 rounded-2xl shadow mt-20'>
            <FXForm onSubmit={onSubmit}>
                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                    <FxInput type='text' label='Name' name='name' />
                    <FxInput type='email' name='email' label='Email' />
                    <FxInput type='text' name='mobileNumber' label='Phone' />
                    <FxInput type='password' name='password' label='Password' />
                    <Button type='submit'>Login</Button>
                </div>
            </FXForm>
        </div>
    )
}

export default Registration