import { useState, useRef } from "react";
import { TbCloudUpload } from "react-icons/tb";

const Test = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };

    // send files to the server
    const handleUpload = () => {
        console.log("uploaded")
    };

    if (files) return (
        <div className="uploads">
            <ul>
                {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
            </ul>
            <div className="actions">
                <button onClick={() => setFiles(null)}>Cancel</button>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )

    return (
        <>
            <div
                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
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
                    multiple
                    onChange={(event) => setFiles(event.target.files)}
                    hidden
                    accept="image/png, image/jpeg, application/pdf"
                    ref={inputRef}
                />
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
        </>
    );
};

export default Test;