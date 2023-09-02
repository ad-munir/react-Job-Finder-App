/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../Contexts/Contexts";

const RegistrationForm = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toBeconfirmed, setToBeconfirmed] = useState('');


    const { user, setUser, setIsLoggedIn } = useContext(UserContext);

    const navigate = useNavigate();



    const notify = (text) => toast.error(text);


    function validateForm(e) {
        e.preventDefault();
        // Check if the First Name is an Empty string or not.
        if (firstName.length == 0) {
            notify('First Name can not be empty')
            return
        }

        // Check if the First Name is an Empty string or not.
        if (lastName.length == 0) {
            notify('Last Name can not be empty')
            return
        }

        // Check if the Email is an Empty string or not.
        if (email.length == 0) {
            notify('Email Address can not be empty')
            return
        }

        // check if the password follows constraints or not.

        // if password length is less than 8 characters, alert invalid form.
        if (password.length < 8) {
            notify(
                'Password must contain at least 8 characters.',
            )
            return
        }

        // variable to count upper case characters in the password.
        let countUpperCase = 0
        // variable to count lowercase characters in the password.
        let countLowerCase = 0
        // variable to count digit characters in the password.
        let countDigit = 0
        // variable to count special characters in the password.
        let countSpecialCharacters = 0

        for (let i = 0; i < password.length; i++) {
            const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', ']', '}', ':', ';', '<', '>'];

            if (specialChars.includes(password[i])) {
                // this means that the character is special, so increment countSpecialCharacters
                countSpecialCharacters++
            } else if (!isNaN(password[i] * 1)) {
                // this means that the character is a digit, so increment countDigit
                countDigit++
            } else {
                if (password[i] == password[i].toUpperCase()) {
                    // this means that the character is an upper case character, so increment countUpperCase
                    countUpperCase++
                }
                if (password[i] == password[i].toLowerCase()) {
                    // this means that the character is lowercase, so increment countUpperCase
                    countLowerCase++
                }
            }
        }

        if (countLowerCase == 0 || countUpperCase == 0 || countDigit == 0 || countSpecialCharacters == 0) {
            // invalid form
            notify('Password must contains lower/upper case, degit & special characters!')
            return
        }

        if( password !== toBeconfirmed){
            notify('Password is not confirmed!')
            return
        }

        // if all the conditions are valid, this means that the form is valid
        handleRegistration();
    }

    const handleRegistration = async () => {
        notify('Form is valid');

        setUser({ ...user, firstName, lastName, email, password });
        setIsLoggedIn(true);
        navigate('/');

        // try {
        //     // Make a POST request to the backend API to register the user
        //     const response = await fetch('/api/register', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email, password }),
        //     });

        //     // Handle response, show success message or errors
        // } catch (error) {
        //     console.error('Registration failed', error);
        // }
    };

    return (
        <>
            <ToastContainer className={"font-semibold text-red-600 w-fit"} />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto md:min-h-screen">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        JobFinder
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        id="firstName"
                                        placeholder="First name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        onChange={(e) => setLastName(e.target.value)}
                                        id="lastName"
                                        placeholder="Last name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        placeholder="name@company.com"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input
                                        type="password"
                                        name="confirm-password"
                                        onChange={(e) => setToBeconfirmed(e.target.value)}
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    onClick={validateForm}
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/sign-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default RegistrationForm