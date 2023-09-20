import { createContext, useState } from "react";
import { getAuthToken } from "../Service/AuthHelper";

export const UserContext = createContext();

// Create a provider component to wrap the app
function UserProvider({ children }) {

    const [user, setUser] = useState({});

    // const [loggedIn, setLoggedIn] = useState(!(getAuthToken() === null || getAuthToken() === 'null'));
    const [loggedIn, setLoggedIn] = useState(false);


    return (
        <UserContext.Provider value={{ user, setUser , loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider