import { Navbar } from '@/src/components/navbar'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link

                    className="flex items-center gap-1 text-current"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">NextUI</p>
                </Link>
            </footer>
        </div>
    )
}

export default layout