
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IUser } from "../types";


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




    return <UserContext.Provider value={{ user, isloading, setUser, setIsLoading }}>
        {children}
    </UserContext.Provider>
}