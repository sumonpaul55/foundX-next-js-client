"use client"
import FXForm from '@/src/components/form/FXForm'
import { Button } from '@nextui-org/button'
import React, { useEffect } from 'react'
import { FxInput } from '../../../components/form/FxInput'
import { FieldValues, SubmitHandler } from 'react-hook-form';
import loginValidationSchema from '@/src/schemas/login.schema'
import { userLogin } from '@/src/hooks/auth.hook'
import LoadingBlur from '@/src/components/UI/LoadingBlur'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUser } from '@/src/context/user.provider'
import { toast } from 'sonner'



const LoginPage = () => {

    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect")
    const router = useRouter()
    const { mutate, isPending, isSuccess } = userLogin()

    const { setIsLoading } = useUser()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            mutate(data)
            setIsLoading(true)
        } catch (error: any) {
            toast.error(error?.message)
        }
    }

    if (!isPending && isSuccess) {
        if (redirect) {
            router.push(redirect)
        } else {
            router.push("/")
        }
    }


    return (
        <>
            {
                isPending ? <LoadingBlur /> :
                    <div className='h-screen flex items-center justify-center w-full'>
                        <div className='md:w-[500px] mx-auto p-4 md:p-7 border border-gray-800 rounded-2xl shadow'>
                            <FXForm onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
                                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                                    {/* <Input type="email" label="Email" name='email' /> */}
                                    <FxInput type='email' name='email' label='Email' />
                                    <FxInput type='password' name='password' label='Password' />

                                    <Button type='submit'>Login</Button>
                                </div>
                            </FXForm>
                            <p className='py-3 text-sm'>Don't you have account <Link className='text-pink-600' href="/registration">Register</Link></p>
                        </div>
                    </div>
            }

        </>
    )
}

export default LoginPage