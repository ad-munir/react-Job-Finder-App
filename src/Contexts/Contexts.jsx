import { createContext, useState } from "react";

export const UserContext = createContext();

// Create a provider component to wrap the app
function UserProvider({ children }) {

    const [user, setUser] = useState({});

    const [loggedIn, setLoggedIn] = useState(false);


    return (
        <UserContext.Provider value={{ user, setUser , loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider