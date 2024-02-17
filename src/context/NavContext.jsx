import { createContext, useState } from "react";

export const NavContext = createContext()

export function NavProvider ({ children }){

    const [nav , setNav] = useState(false)

    const opneNav = () => {
        setNav(true)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <NavContext.Provider value={{nav , opneNav , closeNav}}>
            {children}
        </NavContext.Provider>
    )
}
