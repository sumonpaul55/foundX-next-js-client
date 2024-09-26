"use client"
import { PlusIcon, TrashIcon } from '@/src/asstes/icons';
import FxDatepicker from '@/src/components/form/FxDatepicker';
import { FxDescription } from '@/src/components/form/FxDescription';
import { FxInput } from '@/src/components/form/FxInput';
import FxSelect from '@/src/components/form/FxSelect';
import { useUser } from '@/src/context/user.provider';
import { useGetCategories } from '@/src/hooks/category.hook';
import { useCreatePost } from '@/src/hooks/post.hook';
import dateToIsonString from '@/src/utils/dateToISOstring';
import { allDistict } from '@bangladeshi/bangladesh-address';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react'
import { FieldValues, FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form'


const allcities = allDistict().sort().map((city: string) => ({
    key: city,
    label: city
}))

const CreatePost = () => {
    const { mutate: handleCreatePost } = useCreatePost()
    const [imageFiles, setImageFiles] = useState<File[] | []>([])
    const [imagePrviews, setImagePreviews] = useState<string[] | []>([])
    const { user } = useUser()
    const { data: categories, isSuccess: categorySuccess } = useGetCategories()

    let categoryOption: { key: string; label: string }[] = []

    categoryOption = categories?.data?.map((category: { _id: string; name: string }) => (
        {
            key: category?._id,
            label: category?.name
        }
    ))

    const methods = useForm();
    const { control, handleSubmit } = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        // this name should append anme and field name field name like (`quiestions${index}.value`)
        name: "quiestions",
    })

    // onSubmit handle
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const formData = new FormData();
        const postData = {
            ...data,
            questions: data?.quiestions?.map((quiestion: { name: string; value: string }) => quiestion?.value),
            // get date as a iso string
            dateFound: dateToIsonString(data.dateFound),
            user: user!._id
        }
        formData.append("data", JSON.stringify(postData))

        for (let image of imageFiles) {
            formData.append("itemImages", image)
        }
        handleCreatePost(formData)
    }


    const handledAppend = () => {
        append({ name: "quiestions" })
    }
    const handleImageFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        setImageFiles((prev) => [...prev, file])

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews((prev) => [...prev, reader.result as string])
            }
            reader.readAsDataURL(file)
        }
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
                        <FxSelect label='City' name='city' options={allcities} />
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <div className='flex-1'>
                            <FxSelect label='Select Categroy' disabled={!categorySuccess} name='category' options={categoryOption} />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="image" className='w-full flex bg-gray-800 cursor-pointer h-full items-center justify-center rounded-md'>Select Image</label>
                            <input onChange={(e) => handleImageFile(e)} type="file" id='image' multiple className='hidden' />
                        </div>
                    </div>
                    {/* preview image */}
                    <div className='flex gap-4 items-center flex-wrap mt-2'>
                        {
                            imagePrviews.length > 0 && imagePrviews?.map((imgDataUrl: string, idx: number) => (
                                <div key={idx} className='size-28 border-dashed p-1 border-1 rounded-md border-gray-400'>
                                    <Image src={imgDataUrl} height={200} width={200} className='size-full object-cover object-center rounded' alt='Image' />
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-3'>
                        <FxDescription name="description" label="Description" />
                    </div>
                    <Divider className='my-3' />
                    <div className='flex items-center justify-between'>
                        <h3>Owner Varification Quiestions</h3>
                        <Button isIconOnly onClick={handledAppend}>
                            <PlusIcon />
                        </Button>
                    </div>
                    {
                        fields?.map((field, index) => (
                            <div key={field?.id} className='my-2 flex items-center justify-between gap-1' >
                                <FxInput label='quiestion' name={`quiestions.${index}.value`} type='text' />
                                <Button onClick={() => remove(index)} isIconOnly className='p-2'>
                                    <TrashIcon />
                                </Button>
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