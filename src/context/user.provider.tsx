
import { createContext, Dispatch, SetStateAction, useState } from "react";

type IUserProviderValues = {
    user: string | null | undefined;
    isloading: boolean | undefined;
    setIsLoading: Dispatch<SetStateAction<undefined>>;
    setUser: Dispatch<SetStateAction<undefined>>
} | undefined

const UserContext = createContext<IUserProviderValues>(undefined)

const UserProvider = () => {
    const [user, setUser] = useState()
    const [isloading, setIsLoading] = useState()

    return <UserContext.Provider value={{ user, isloading, setUser, setIsLoading }}>

    </UserContext.Provider>
}