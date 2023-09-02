/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../Contexts/Contexts";
import userImg from './../../assets/men.jpg'

const Navbar = () => {


    const navigate = useNavigate();
    // Access the context data
    const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);


    const handleSignOut = () => {
        setUser({});
        setIsLoggedIn(false);
        navigate("/sign-in");
    }

    return (
        <nav className="navBar flex justify-between items-center p-[3rem]">
            <Link to={'/'}>
                <h1 className="logo text-[25px] text-blueColor">
                    <strong>Job</strong>Finder
                </h1>
            </Link>

            <div className="menu flex gap-8 text-[#6f6f6f] font-semibold">
                <Link to={'/'}>
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
                    isLoggedIn ?
                        <>
                            <AvatarDropdown username={user.firstname} userImg={userImg} />
                            <Link to={'/'}>
                                <button 
                                    onClick={handleSignOut}
                                className="flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-blue-700 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white">
                                    <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white text-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Sign out
                                    </span>
                                </button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to={'/sign-in'}>
                                <button className="flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-blue-700 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white text-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Sign in
                                    </span>
                                </button>
                            </Link>

                            <Link to={'/sign-up'}>
                                <button type="button" className="text-white bg-gradient-to-r from-blue-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign up</button>
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