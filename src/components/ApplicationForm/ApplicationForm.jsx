import { useEffect, useRef, useState } from 'react';
import { TbCloudUpload } from 'react-icons/tb';
import { GrFormClose } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';

import emailjs from '@emailjs/browser';


const ApplicationForm = () => {

    const locate = useLocation();
    const { id, image, title, location, desc, company, type, level, createdAt } = locate.state;

    const [files, setFiles] = useState([]);
    const inputRef = useRef();
    const form = useRef();



    useEffect(() => {
        console.log(files);
        console.log(files.length);
    }, [files]);

    const handleDragOver = (event) => {
        event.preventDefault();
    };


    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };


    const removeFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vbftgdu', 'template_w6enzh2', form.current, 'Xt3PctvK_oNRKR3B4')
            .then((result) => {
                console.log('Email sent successfully: ', result.text);
            })
            .catch((error) => {
                console.error('Error sending email: ', error.text);
            });
    };




    return (
        <div className="min-h-[140vh] bg-gray-100 p-10 ">

            <Link to={'/'}>
                <h1 className="logo text-[25px] text-blueColor pl-10 fixed">
                    <strong>Job</strong>Finder
                </h1>
            </Link>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative  bg-gradient-to-r from-blue-100 to-blue-300  shadow-lg  ">

                    <div className="company p-3 flex items-center">
                        <img src={image} alt="company logo" className='w-[12%]' />
                        <span className='text-[17px] py-4 block group-hover:to-white'>{company}</span>
                    </div>
                    <h1 className="text-2xl text-center font-semibold">Job Application Form</h1>

                    <div className="divide-y divide-gray-200 sm:px-20 sm:py-10">

                        <form onSubmit={sendEmail}
                            ref={form}
                            encType="multipart/form-data"
                            method="post"
                            className=" flex flex-col gap-3 py-8 text-base leading-6 space-y-4 text-textColor-700 sm:text-lg sm:leading-7">

                            <input type="text" name="company" defaultValue={company} hidden />
                            <input type="text" name="title" defaultValue={title} hidden />
                            <input type="text" name="company_email" defaultValue={"monirayad29@gmail.com"} hidden />

                            <div className="relative">
                                <input id="firstname" name="applicant_firstname" type="text" className="rounded pl-3 text-[16px] peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="First Name" />
                                <label htmlFor="firstname" className="absolute left-0 -top-3.5 pl-3 font-semibold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First Name<span className='text-red-500 font-semibold'>*</span> </label>
                            </div>

                            <div className="relative">
                                <input autoComplete="off" id="lastname" name="applicant_lastname" type="text" className="rounded pl-3 text-[16px] peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Last Name" />
                                <label htmlFor="lastname" className="absolute left-0 -top-3.5 pl-3 font-semibold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name<span className='text-red-500 font-semibold'>*</span></label>
                            </div>

                            <div>
                                <h6 className="mt-5 font-semibold ">Resume Attachement<span className='text-red-500 font-semibold'>*</span></h6>

                                {files.length > 0 ?

                                    <div className="uploads">
                                        <ul>
                                            {files.map((file, idx) =>
                                                <li key={idx}
                                                    className='flex justify-between p-[5px] my-1 rounded-[4px] bg-textColor text-xs w-full text-white font-semibold'
                                                >
                                                    {file.name}
                                                    <GrFormClose onClick={() => removeFile(idx)} className='bg-white cursor-pointer' />
                                                </li>
                                            )}

                                        </ul>
                                    </div>
                                    :
                                    <div
                                        className="flex flex-col justify-center items-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                    >
                                        <div className="flex justify-center">
                                            <span className="flex items-center space-x-2">
                                                <TbCloudUpload className="text-3xl" />
                                                <span className="font-medium text-gray-600">
                                                    Drop file to Attach, or &nbsp;
                                                    <span onClick={() => inputRef.current.click()} className="text-blue-600 underline">browse</span>
                                                </span>
                                                <br />
                                            </span>
                                            <input
                                                type="file"
                                                name='attachment'
                                                value={files}
                                                onChange={(event) => setFiles(Array.from(event.target.files))}
                                                hidden
                                                accept=".png, .jpeg, .jpg, .pdf"
                                                ref={inputRef}
                                            />
                                        </div>

                                        <h6 className='font-semibold text-gray-800 text-sm'>PDF, JPEG, JPG, PNG</h6>
                                    </div>
                                }
                            </div>

                            <div className="relative">
                                <input autoComplete="off" id="email" name="applicant_email" type="text" className="rounded pl-3 text-[16px] peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 pl-3 font-semibold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address<span className='text-red-500 font-semibold'>*</span> </label>
                            </div>

                            <div className="relative">
                                <input autoComplete="off" id="phone" name="applicant_phone" type="text" className="rounded pl-3 text-[16px] peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Phone Number" />
                                <label htmlFor="phone" className="absolute left-0 -top-3.5 pl-3 font-semibold text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number<span className='text-red-500 font-semibold'>*</span></label>
                            </div>


                            <div className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ApplicationForm;