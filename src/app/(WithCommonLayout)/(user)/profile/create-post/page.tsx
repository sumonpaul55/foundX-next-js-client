"use client"
import FxDatepicker from '@/src/components/form/FxDatepicker';
import { FxInput } from '@/src/components/form/FxInput';
import FxSelect from '@/src/components/form/FxSelect';
import dateToIsonString from '@/src/utils/dateToISOstring';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import React from 'react'
import { FieldValues, FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form'



const cityOptions = [
    {
        key: "dhaka",
        label: "Dhaka"
    },
    {
        key: "khulna",
        label: "Khulna"
    },
    {
        key: "rangpur",
        label: "Rangpur"
    },
    {
        key: "sylet",
        label: "Sylet"
    },

]


const CreatePost = () => {
    const methods = useForm();
    const { control, handleSubmit } = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        // this name should append anme and field name field name like (`quiestions${index}.value`)
        name: "quiestions",


    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const formData = {
            ...data,
            quiestions: data?.quiestions?.map((quiestion: { name: string; value: string }) => quiestion?.value),
            // get date as a iso string
            dateFound: dateToIsonString(data.dateFound)
        }
        console.log(formData)
    }
    const handledAppend = () => {
        append({ name: "quiestions" })
    }
    return (
        <div>
            <h2 className='dark: text-white font-semibold'>Post a Found Item</h2>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-2 items-center'>
                        <FxInput name='title' label='Title' type='text' />
                        <FxDatepicker label='Date' name="dateFound" />
                    </div>
                    <div className='flex gap-2 items-center mt-3'>
                        <FxInput name='location' label='Location' type='text' />
                        <FxSelect label='City' name='city' options={cityOptions} />
                    </div>
                    <div className='flex gap-2 items-center mt-3'>
                        <FxInput name='category' label='Category' type='text' />
                        {/* <FxInput name='city' label='City' type='text' /> */}
                    </div>





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