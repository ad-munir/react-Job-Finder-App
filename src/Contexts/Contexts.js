import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// Create a provider component to wrap the app
function UserProvider({ children }) {

    const userObj = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }
    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState("false");



    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);



    return (
        <UserContext.Provider value={{ user, setUser , isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}