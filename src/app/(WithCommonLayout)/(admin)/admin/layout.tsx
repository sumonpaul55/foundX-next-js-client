import React, { ReactNode } from 'react'

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <h2>Admin Layout</h2>
            {children}
        </>
    )
}

export default AdminLayout