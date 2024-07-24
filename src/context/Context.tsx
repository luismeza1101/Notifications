import { createContext, ReactNode, useState } from "react";
import { data, Notifications } from "../data";

interface NotyContextType {
    notys: Notifications[]
    setNotys: (actuNoty: Notifications[]) => void 
}

export const NotyContext = createContext<NotyContextType | undefined>(undefined);


export const NotyProvider: React.FC<{children: ReactNode}> = ({children}) => {

    const [notys, setNotys] = useState<Notifications[]>([...data])

    return (
        <NotyContext.Provider value={{notys, setNotys}}>
            {children}
        </NotyContext.Provider>
    )
}