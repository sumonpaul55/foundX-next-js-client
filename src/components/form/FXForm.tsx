import React, { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'


type IProps = {
    children: ReactNode;
}


const FXForm = ({ children, onSubmit }: any) => {
    const method = useForm();

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