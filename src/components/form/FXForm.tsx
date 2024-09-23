"use client"
import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'


interface IProps extends TFormConfig {
    children: ReactNode;
    onSubmit: SubmitHandler<any>
}

interface TFormConfig {
    defaultValues?: Record<string, any> | any;
    resolver?: any
}

const FXForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
    const formConfig: TFormConfig = {};

    if (defaultValues) { // here !! mean if exist or truthy
        formConfig["defaultValues"] = defaultValues;
    }
    if (resolver) { // here !! mean if exist or truthy
        formConfig["resolver"] = resolver;
    }

    const methods = useForm(formConfig);

    const submitHandler = methods.handleSubmit;

    return (
        <FormProvider {...methods}>
            <form onSubmit={submitHandler(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default FXForm