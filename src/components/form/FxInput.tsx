"use client"

import { Input } from '@nextui-org/input'
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface TInputProps {
    variant?: 'flat' | "bordered" | "faded" | "underlined";
    size?: "md" | "sm" | "lg";
    required?: boolean;
    type: string;
    name: string;
    label: string
}

export const FxInput = ({ variant = "bordered", size = "md", required = true, type = "text", name, label }: TInputProps) => {

    const { register, formState: { errors } } = useFormContext();


    return (
        <Input {...register(name)} variant={variant} size={size} required={required} label={label} type={type} errorMessage={errors[name] ? (errors[name].message as string) : ''} isInvalid={!!errors[name]} />
    )
}
