
import React, { createContext, useState, ReactNode } from "react";

interface ContextType {
    
    firstField: string[],
    setFirstField: React.Dispatch<React.SetStateAction<string[]>>,
    secondField: string[],
    setSecondField: React.Dispatch<React.SetStateAction<string[]>>,
    isTicketWon: boolean,
    setTicket: React.Dispatch<React.SetStateAction<boolean>>
}
const MyContext = createContext<ContextType>({

    firstField: [],
    setFirstField: () => { },
    secondField: [],
    setSecondField: () => {},
    isTicketWon: false,
    setTicket: () => {}
});

const MyContextProvider = ({ children }: {children: ReactNode}) => {
    const [firstField, setFirstField] = useState<string[]>([]);
    const [secondField, setSecondField] = useState<string[]>([]);
    const [isTicketWon, setTicket] = useState(false)

    return (
        <MyContext.Provider 
            value={
                {
                    firstField, setFirstField, secondField, setSecondField, isTicketWon, setTicket
                }
            }
        >
            { children }
        </MyContext.Provider>
    )
}

export { MyContext, MyContextProvider }