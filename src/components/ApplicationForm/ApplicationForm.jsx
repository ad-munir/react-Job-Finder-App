import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ApplicationForm = () => {

    const locate = useLocation();
    const { id, image, title, location, desc, company, type, level, createdAt } = locate.state;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState('');
    const [submitting, setSubmitting] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData to send files
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('resume', resume);
        formData.append('coverLetter', coverLetter);

        try {
            const response = await axios.post('/submit-application', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); // Application submitted successfully
            // Optionally, you can show a success message to the user
        } catch (error) {
            console.error(error);
            // Show an error message to the user
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg  sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                        <h6>{id}</h6>
                            <h1 className="text-2xl text-center font-semibold">Job Application Form</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className=" flex flex-col gap-3 py-8 text-base leading-6 space-y-4 text-textColor-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input autoComplete="off" id="firstname" name="firstname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="First Name" />
                                    <label htmlFor="firstname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First Name<span className='text-red-500 font-semibold'>*</span> </label>
                                </div>

                                <div className="relative">
                                    <input autoComplete="off" id="lastname" name="lastname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Last Name" />
                                    <label htmlFor="lastname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name<span className='text-red-500 font-semibold'>*</span></label>
                                </div>

                                <div>

                                    <h6 className="mt-5 font-semibold ">Resume Attachement</h6>

                                    <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                        <span className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <span className="font-medium text-gray-600">
                                                Drop files to Attach, or
                                                <span className="text-blue-600 underline">browse</span>
                                            </span>
                                        </span>
                                        <input type="file" name="resume" className="hidden" />
                                    </label>
                                </div>





                                <div className="relative">
                                    <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address<span className='text-red-500 font-semibold'>*</span> </label>
                                </div>



                                <div className="relative">
                                    <input autoComplete="off" id="phone" name="phone" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Phone Number" />
                                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number<span className='text-red-500 font-semibold'>*</span></label>
                                </div>


                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;