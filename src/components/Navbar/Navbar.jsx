import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../Contexts/Contexts";
import userImg from './../../assets/men.jpg'
import { getAuthToken, getUserData, setAuthHeader } from "../../Service/AuthHelper";

const Navbar = () => {


    const navigate = useNavigate();
    // Access the context data
    const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);


    const handleSignOut = () => {
        // Remove the authentication token from localStorage
        localStorage.removeItem('auth_token');
        // setAuthHeader(null)
        setUser({});
        setLoggedIn(false);
        navigate("/");
    }

    // Check for the presence of an authentication token on page load
    useEffect(() => {
        const authToken = getAuthToken();
        if (authToken && authToken !== 'null') {
            setAuthHeader(authToken);
            setLoggedIn(true);

            // Retrieve user data and set it in the context
        const userData = getUserData();
        setUser(userData);
        }
    }, []);

    return (
        <nav className="navBar flex justify-between items-center px-12 pt-12">
            <Link to={'/'}>
                <h1 className="logo text-[25px] text-blueColor">
                    <strong>Job</strong>Finder
                </h1>
            </Link>

            <div className="menu flex gap-8 text-[#6f6f6f] font-semibold">
                <Link to={'/jobs'}>
                    <li className="menuList  hover:text-blueColor">Jobs</li>
                </Link>
                <Link to={'/companies'}>
                    <li className="menuList hover:text-blueColor">Companies</li>
                </Link>
                <Link to={'/about'}>
                    <li className="menuList hover:text-blueColor">About</li>
                </Link>
                <Link to={'/contact'}>
                    <li className="menuList hover:text-blueColor">Contact</li>
                </Link>

            </div>

            <div className="flex relative -right-28">
                {
                    loggedIn ?
                        <>
                            <AvatarDropdown username={user.firstname} userImg={userImg} />
                            <button 
                                onClick={handleSignOut}
                                className="flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-blue-700 to-blue-500 hover:text-white focus:outline-none">
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white text-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Sign out
                                </span>
                            </button>
                        </>
                        :
                        <>
                            <Link to={'/sign-in'}>
                                <button className="flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-blue-700 to-blue-500 hover:text-white focus:outline-none">
                                    <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white text-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Sign in
                                    </span>
                                </button>
                            </Link>

                            <Link to={'/sign-up'}>
                                <button type="button" className="text-white bg-gradient-to-r from-blue-700 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                            </Link>
                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar


function AvatarDropdown({username, userImg}) {

    return (
        <div className="relative mr-3">

            <div className="flex items-center space-x-1">
                <img className="w-10 h-10 rounded-full border" src={userImg} alt="user" />
                <div className="text-sm text-gray-500 font-semibold">{username}</div>
            </div>

        </div>
    );
}