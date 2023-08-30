import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ApplicationForm = () => {

    const location = useLocation();
    const { id } = location.state;

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
        // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        //     <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        //         <h1 className="text-2xl font-semibold mb-6">Job Application Form</h1>
        //         <form onSubmit={handleSubmit}>
        //             <div className="mb-4">
        //                 <label htmlFor="name" className="block text-sm font-medium">
        //                     Name: {id}
        //                 </label>
        //                 <input
        //                     type="text"
        //                     id="name"
        //                     name="name"
        //                     required
        //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        //                     onChange={(e) => setName(e.target.value)}
        //                 />
        //             </div>

        //             <div className="mb-4">
        //                 <label htmlFor="email" className="block text-sm font-medium">
        //                     Email:
        //                 </label>
        //                 <input
        //                     type="email"
        //                     id="email"
        //                     name="email"
        //                     required
        //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        //                     onChange={(e) => setEmail(e.target.value)}
        //                 />
        //             </div>

        //             <div className="mb-4">
        //                 <label htmlFor="resume" className="block text-sm font-medium">
        //                     Resume:
        //                 </label>
        //                 <input
        //                     type="file"
        //                     id="resume"
        //                     name="resume"
        //                     accept=".pdf,.doc,.docx"
        //                     required
        //                     className="mt-1 block w-full"
        //                     onChange={(e) => setResume(e.target.files[0])}
        //                 />
        //             </div>

        //             <div className="mb-4">
        //                 <label htmlFor="coverLetter" className="block text-sm font-medium">
        //                     Cover Letter:
        //                 </label>
        //                 <textarea
        //                     id="coverLetter"
        //                     name="coverLetter"
        //                     rows="4"
        //                     required
        //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        //                     onChange={(e) => setCoverLetter(e.target.value)}
        //                 ></textarea>
        //             </div>

        //             <button
        //                 type="submit"
        //                 disabled={submitting}
        //                 className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        //             >
        //                 {submitting ? 'Submitting...' : 'Apply'}
        //             </button>
        //         </form>
        //     </div>
        // </div>


        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl text-center font-semibold">Job Application Form</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input autoComplete="off" id="firstname" name="firstname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="First Name" />
                                    <label htmlFor="firstname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First Name</label>
                                </div>

                                <div className="relative">
                                    <input autoComplete="off" id="lastname" name="lastname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Last Name" />
                                    <label htmlFor="lastname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name</label>
                                </div>

                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Attach Files
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    className="border rounded px-4 py-2 w-full"
                                />

                                <div className="relative">
                                    <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>

                                <div className="relative">
                                    <input autoComplete="off" id="phone" name="phone" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Phone Number" />
                                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number</label>
                                </div>

                                <div className="relative">
                                    <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>


                                <div className="relative">
                                    <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
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