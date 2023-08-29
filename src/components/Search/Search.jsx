/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle, AiFillCloseSquare } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import Jobs from '../Jobs/Jobs';

const Search = ({ data }) => {

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    const [error, setError] = useState('');

    const [filteredJobs, setFilteredJobs] = useState([]);


    const [time, setTime] = useState('all')
    const [type, setType] = useState('all')
    const [level, setLevel] = useState('all')


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "jobTitle") {
            setJobTitle(value);
        }

        if (name === "company") {
            setCompany(value);
        }

        if (name === "location") {
            setLocation(value);
        }
    }



    // Handle sorting by time/type/level change
    const handleSorting = (e) => {
        const { name, value } = e.target;

        if (name === "time") {
            setTime(value);
        }

        if (name === "type") {
            setType(value);
        }

        if (name === "level") {
            setLevel(value);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!jobTitle && !company && !location) {
            setError("Enter a job title, company or location to start a search.");
        } else {

            const result = data.filter((item) => {

                const createdAtDate = new Date(item.createdAt); // Get the createdAt date
                const currentDate = new Date(); // Get the current date

                const timeDifference = Math.abs(currentDate - createdAtDate); // Difference in milliseconds
                const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60)); // Convert the time difference to hours


                return (
                    item.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
                    item.company.toLowerCase().includes(company.toLowerCase()) &&
                    item.location.toLowerCase().includes(location.toLowerCase()) &&

                    (
                        time === "all" || 
                        (time === "Today" && hoursDifference < 24) ||
                        (time === "This week" && hoursDifference < 24 * 7) ||
                        (time === "This month" && hoursDifference < 24 * 30)
                    ) &&
                    (type === "all" || item.type.toLowerCase().includes(type.toLowerCase())) &&
                    (level === "all" || item.level.toLowerCase().includes(level.toLowerCase()))
                );
            })

            console.log(result)
            setFilteredJobs(result);
            setError('');
            console.log(filteredJobs)
        }
    }


    return (
        <div className="search">
            {error &&
                <div className='text-red-700 bg-rose-100 font-semibold py-4 px-10 rounded border border-red-500 shadow-lg w-[50%] m-auto mb-8 flex items-center justify-between'>
                    <span>{error}</span>
                    <button className='text-[25px] text-blue-950 hover:text-blue-900' onClick={() => setError('')}><AiFillCloseSquare /></button>
                </div>
            }

            <div className="grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] hover:shadow-lg ">
                <form action="" onSubmit={handleSubmit}>

                    <div className="inputsDiv flex justify-between items-center rounded-[8px] gp-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700 ">

                        <div className="flex gap-2 items-center">
                            <AiOutlineSearch className='text-[25px] icon' />
                            <input
                                type="text"
                                className='bg-transparent 
                                    to-blue-500
                                    focus:outline-none w-[100%]'
                                placeholder='Search Job Here...'
                                name='jobTitle'
                                value={jobTitle}
                                onChange={handleInputChange}
                            />
                            <AiOutlineCloseCircle />
                        </div>

                        <div className="flex gap-2 items-center">
                            <BsHouseDoor className='text-[25px] icon' />
                            <input
                                type="text"
                                className='bg-transparent 
                                    to-blue-500
                                    focus:outline-none w-[100%]'
                                placeholder='Search by company...'
                                name='company'
                                value={company}
                                onChange={handleInputChange}
                            />
                            <AiOutlineCloseCircle />
                        </div>

                        <div className="flex gap-2 items-center">
                            <CiLocationOn className='text-[25px] icon' />
                            <input
                                type="text"
                                className='bg-transparent 
                                    to-blue-500
                                    focus:outline-none w-[100%]'
                                placeholder='Search by location...'
                                name='location'
                                value={location}
                                onChange={handleInputChange}
                            />
                            <AiOutlineCloseCircle />
                        </div>

                        <button className='bg-blueColor  p-3 px-8 rounded-[10px] 
                                    text-white cursor-pointer hover:bg-blue-300 '>Search</button>
                    </div>


                </form>
                <div className="sortDiv flex items-center gap-10 justify-center">

                    <div className="singleSearch flex items-center gap-2">
                        <label htmlFor="time"
                            className='text-[#808080] font-semibold'>Sort by time:</label>

                        <select name="time"
                            value={time}
                            onChange={handleSorting}
                            id="time"
                            className='bg-white rounded-[3px] px-4 py-1 '
                        >
                            <option value="all">All</option>
                            <option value="Today">Today</option>
                            <option value="This week">This week</option>
                            <option value="This month">This month</option>
                        </select>
                    </div>

                    <div className="singleSearch flex items-center gap-2">
                        <label htmlFor="type"
                            className='text-[#808080] font-semibold'>Type:</label>

                        <select name="type"
                            value={type}
                            onChange={handleSorting}
                            id="type"
                            className='bg-white rounded-[3px] px-4 py-1 '
                        >
                            <option value="all">All</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Remote">Remote</option>
                            <option value="CDI">CDI</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    <div className="singleSearch flex items-center gap-2">
                        <label htmlFor="level"
                            className='text-[#808080] font-semibold'>Level:</label>

                        <select name="level"
                            value={level}
                            onChange={handleSorting}
                            id="level"
                            className='bg-white rounded-[3px] px-4 py-1 '
                        >
                            <option value="all">All</option>
                            <option value="Senior">Senior</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                    </div>

                    <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>

                </div>
            </div>

            <Jobs data={filteredJobs} />
        </div>
    )
}

export default Search