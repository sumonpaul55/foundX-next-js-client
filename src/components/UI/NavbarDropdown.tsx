"use client"
import { useUser } from '@/src/context/user.provider'
import { logout } from '@/src/services/authService'
import { Avatar } from '@nextui-org/avatar'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavbarDropdown = () => {
    const { setIsLoading, user } = useUser()
    const router = useRouter();
    const handleRouter = (pathname: string) => {
        router.push(pathname)
    }
    // handle logout
    const handleLogout = () => {
        logout();
        setIsLoading(true)
        // router.push("/")
    }
    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar src={user?.profilePhoto} className='cursor-pointer' />
            </DropdownTrigger>
            {
                user?.role === "USER" ?
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem onClick={() => handleRouter("/profile")} key="new">Profile</DropdownItem>
                        <DropdownItem onClick={() => handleRouter("/profile/about")} key="about">About</DropdownItem>
                        <DropdownItem onClick={() => handleRouter("/profile/create-post")} key="create">Create Post</DropdownItem>
                        <DropdownItem onClick={() => handleRouter("/profile/claim-requests")} key="">Claim Requests</DropdownItem>
                        <DropdownItem onClick={() => handleRouter("/profile/settings")} key="settings">Settings</DropdownItem>
                        <DropdownItem className='bg-primary' onClick={handleLogout} key="Logout">Log out</DropdownItem>
                    </DropdownMenu> :
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem onClick={() => handleRouter("/admin")} key="new">Dashboard</DropdownItem>
                        <DropdownItem className='bg-primary' onClick={handleLogout} key="Logout">Log out</DropdownItem>
                    </DropdownMenu>
            }
        </Dropdown>
    )
}

export default NavbarDropdown