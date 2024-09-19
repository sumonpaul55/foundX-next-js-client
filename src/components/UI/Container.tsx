import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`container mx-auto max-w-7xl pt-16 px-6 flex-grow ${className && className}`}>
            {children}
        </div>
    )
}

export default Container