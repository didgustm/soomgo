import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const useHeader = () => useContext(HeaderContext);

export const HeaderProvider = ({children}) => {
    const [title, setTitle] = useState("타이틀");
    const [bookmark, setBookmark] = useState(false)

    return (
        <HeaderContext.Provider value={{title, setTitle, bookmark, setBookmark}}>
            {children}
        </HeaderContext.Provider>
    )
}