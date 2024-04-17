import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface GlobalProps {
    firstField: string[],
    setFirstField: Dispatch<SetStateAction<string[]>>
}
const GlobalContext = createContext<GlobalProps>(
    {
        firstField: [],
        setFirstField: () => {}
    }
)

const GlobalContextProvider = ({children}: {children: ReactNode}) => {
    const [firstField, setFirstField] = useState<string[]>([])
    return (
        <GlobalContext.Provider value={{firstField, setFirstField}} >{ children }</GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContextProvider, useGlobalContext }