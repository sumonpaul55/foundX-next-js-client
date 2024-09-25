"use client"

import { IInputs } from '@/src/types';
import { Input } from '@nextui-org/input'
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface TInputProps extends IInputs { }

export const FxInput = ({ variant = "bordered", size = "md", required = true, type = "text", name, label, className }: TInputProps) => {

    const { register, formState: { errors } } = useFormContext();


    return (
        <Input {...register(name)} className={className && className} variant={variant} size={size} isRequired={required} label={label} type={type} errorMessage={errors[name] ? (errors[name].message as string) : ''} isInvalid={!!errors[name]} />
    )
}
