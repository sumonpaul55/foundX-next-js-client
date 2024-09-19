import { Navbar } from '@/src/components/navbar'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 md:py-20">
                <Link
                    className="flex items-center gap-1 text-current"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">NextUI</p>
                </Link>
            </footer>
        </>
    )
}

export default layout