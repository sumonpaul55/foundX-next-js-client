import React, { ReactNode } from 'react'

const ParallelLayout = ({ children, spot }: { children: ReactNode; spot: ReactNode }) => {
    return (
        <div>
            {children}
            {spot}
        </div>
    )
}

export default ParallelLayout