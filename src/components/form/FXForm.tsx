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
    let formConfig: TFormConfig = {};

    if (!!defaultValues) { // here !! mean if exist or truthy
        formConfig = formConfig["defaultValues"]
    }
    if (!!resolver) { // here !! mean if exist or truthy
        formConfig = formConfig["resolver"]
    }

    const method = useForm(formConfig);

    const submitHandler = method.handleSubmit;
    return (
        <FormProvider {...method}>
            <form onSubmit={submitHandler(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default FXForm