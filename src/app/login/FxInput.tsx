import { Input } from '@nextui-org/input'
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface TInputProps {
    variant?: 'flat' | "bordered" | "faded" | "underlined";
    size?: "md" | "sm" | "lg";
    required?: boolean;
    type: string;
    name: string;
}

export const FxInput = ({ variant = "bordered", size = "md", required = true, type = "text", name }: TInputProps) => {
    const { register } = useFormContext()
    return (
        <Input variant={variant} size={size} required={required} type={type} {...register(name)} />
    )
}
