import React, { ReactNode } from 'react'

const userLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <h3>User Profile</h3>
            {children}
        </div>
    )
}

export default userLayout