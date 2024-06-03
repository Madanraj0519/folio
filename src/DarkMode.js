import React, { createContext, useState, useContext, useEffect} from "react";

const ShowDarkMode = createContext();

export const ShowDarkModeProvider = ({children}) => {

    const [isShowDark, setIsShowDark] = useState(() => {

        const savedMode = localStorage.getItem('mode');

        return savedMode ? JSON.parse(savedMode) : false
    });

    const toggleDarkMode = () => {
        setIsShowDark((prevMode) => !prevMode);
    };

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(isShowDark));
    }, [isShowDark])

    return (
        <ShowDarkMode.Provider value={{ isShowDark, toggleDarkMode}}>
            {children}
        </ShowDarkMode.Provider>
    )
};

export const useShowMode = () => {
    return useContext(ShowDarkMode);
}