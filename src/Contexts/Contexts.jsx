/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// Create a provider component to wrap the app
function UserProvider({ children }) {

    const userObj = {
        firstname: 'mounir',
        lastname: 'ayad',
        email: 'user@gmail.com',
        password: '000',
    }
    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        console.log(user);
    }, [user]);



    return (
        <UserContext.Provider value={{ user, setUser , isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider