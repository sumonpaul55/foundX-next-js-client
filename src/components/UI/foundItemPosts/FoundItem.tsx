"use client"
import { useUser } from '@/src/context/user.provider';
import { IUser, TFounditemsElements } from '@/src/types'
import { Avatar } from '@nextui-org/avatar';
import { Link } from '@nextui-org/link';
import React from 'react'
import ImageGallery from './ImageGallery';
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@nextui-org/button';
import ClaimRequestModal from '../../modals/ClaimRequestModal';
import AuthenticationModal from '../../modals/AuthenticateModals';

const FoundItem = ({ items }: { items: TFounditemsElements }) => {
    const { title, dateFound, city, description, location, _id, images, user, questions } = items;

    const { name, email, profilePhoto } = (user as IUser | undefined) || {};

    const { user: loggedInUser } = useUser();
    // console.log("db email", email, "user email =", loggedInUser?.email)
    return (
        <div className="mb-2 rounded-md bg-default-100 p-4">
            <div className="border-b border-default-200 pb-2">
                <div className="flex items-center justify-between border-b border-default-200 pb-4">
                    <div className="flex items-center gap-3">
                        <Avatar isBordered name={name} radius="sm" src={profilePhoto} />
                        <div>
                            <p>{name}</p>
                            <p className="text-xs">{email}</p>
                        </div>
                    </div>
                </div>
                <div className="border-b border-default-200 py-4">
                    <div className="mb-4 flex items-start justify-between">
                        <div>
                            <Link href={`/found-items/${_id}`}>
                                <h1 className="cursor-pointer text-2xl">{title}</h1>
                            </Link>
                            <p className="flex items-center gap-1 text-xs">
                                Found on: <Calendar width={14} />
                                {format(new Date(dateFound), "dd MMM, yyyy")}
                            </p>
                        </div>
                        <div>
                            <p className="flex items-center gap-1">
                                <MapPin width={18} />
                                {location}, {city}
                            </p>
                        </div>
                    </div>
                    <p>{description}</p>
                </div>

                <ImageGallery images={images} />

                <div className="mt-4 flex gap-5">
                    {email !== loggedInUser?.email && (
                        <>
                            {loggedInUser?.email && (
                                <ClaimRequestModal id={_id} questions={questions} />
                            )}
                            {!loggedInUser?.email && <AuthenticationModal id={_id} />}
                        </>
                    )}
                    {email !== loggedInUser?.email && (
                        <div className="w-[1px] bg-default-200" />
                    )}
                    <Button variant="light" className="flex-1">
                        Share
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FoundItem