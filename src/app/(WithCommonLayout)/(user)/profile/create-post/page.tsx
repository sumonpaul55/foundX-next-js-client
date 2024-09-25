"use client"
import { FxInput } from '@/src/components/form/FxInput';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import React from 'react'
import { FieldValues, FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form'

const CreatePost = () => {
    const methods = useForm();
    const { control, handleSubmit } = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        // this name should append anme and field name field name like (`quiestions${index}.value`)
        name: "quiestions"
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const formData = {
            ...data,
            quiestions: data?.quiestions?.map((quiestion: { name: string; value: string }) => quiestion?.value)
        }
        console.log(formData)
    }
    const handledAppend = () => {
        append({ name: "quiestions" })
    }
    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FxInput name='title' label='Title' type='text' />
                    <Divider className='my-3' />
                    <div className='flex items-center justify-between'>
                        <h3>Owner Varification Quiestions</h3>
                        <Button onClick={handledAppend}>Append</Button>
                    </div>
                    {
                        fields?.map((field, index) => (
                            <div key={field?.id} className='my-2 flex items-center justify-between gap-1' >
                                <FxInput label='quiestion' name={`quiestions.${index}.value`} type='text' />
                                <Button onClick={() => remove(index)}>Remove</Button>
                            </div>
                        ))
                    }
                    <Divider className='my-3' />
                    <Button type="submit">Post</Button>
                </form>
            </FormProvider>
        </div>
    )
}
export default CreatePost