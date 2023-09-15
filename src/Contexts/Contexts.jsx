import { createContext, useState } from "react";

export const UserContext = createContext();

// Create a provider component to wrap the app
function UserProvider({ children }) {

    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <UserContext.Provider value={{ user, setUser , isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider