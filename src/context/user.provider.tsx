
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { IUser } from "../types";
import { getCurrentUser } from "../services/authService";


const UserContext = createContext<IUserProviderValues | undefined>(undefined)

type IUserProviderValues = {
    user: IUser | null | undefined;
    isloading: boolean | undefined;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setUser: (user: IUser | null) => void;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [isloading, setIsLoading] = useState(false)


    const handleUser = async () => {
        const user = await getCurrentUser();
        setUser(user)
    }

    useEffect(() => {
        handleUser()

    }, [])


    return <UserContext.Provider value={{ user, isloading, setUser, setIsLoading }}>
        {children}
    </UserContext.Provider>
}