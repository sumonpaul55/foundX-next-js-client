"use client"
import { logout } from '@/src/services/authService'
import { Avatar } from '@nextui-org/avatar'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavbarDropdown = ({ name = "name" }: { name?: string }) => {
    const router = useRouter();
    const handleRouter = (pathname: string) => {
        router.push(pathname)
    }
    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar name={name} className='cursor-pointer' />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem onClick={() => handleRouter("/profile")} key="new">Profile</DropdownItem>
                <DropdownItem onClick={() => handleRouter("/profile/about")} key="about">About</DropdownItem>
                <DropdownItem onClick={() => handleRouter("/profile/create-post")} key="create">Create Post</DropdownItem>
                <DropdownItem onClick={() => handleRouter("/profile/claim-requests")} key="">Claim Requests</DropdownItem>
                <DropdownItem onClick={() => handleRouter("/profile/settings")} key="settings">Settings</DropdownItem>
                <DropdownItem className='bg-primary' onClick={() => logout()} key="Logout">Log out</DropdownItem>

            </DropdownMenu>
        </Dropdown>
    )
}

export default NavbarDropdown