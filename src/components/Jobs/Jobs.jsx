/* eslint-disable react/prop-types */
import { BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Jobs = ({ data }) => {




    return (
        <div className="JobsContainer flex gap-10 justify-center flex-wrap items-center py-10">

            {data.map(({ id, image, title, location, desc, company, type, level, createdAt }) => {

                const createdAtDate = new Date(createdAt); // Get the createdAt date
                const currentDate = new Date(); // Get the current date

                const timeDifference = Math.abs(currentDate - createdAtDate); // Difference in milliseconds
                const publishedAt = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert the time difference to hours


                return (
                    <div key={id}
                        className="group group/item singleJob w-[250px] p-5 bg-white rounded-[10px]
                                hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                        <span className="flex justify-between items-center gap-4">
                            <h1 className="text-[16px] font-semibold text-textColor
                        group-hover:text-white">{title}</h1>
                            <span className='flex items-center text-[#ccc] gap-1'>
                                <BiTimeFive />{publishedAt}D
                            </span>
                        </span>
                        <h6 className="text-[#ccc]">{location}</h6>

                        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:to-white ">
                            {desc}
                        </p>

                        <div className="company flex items-center gap-2">
                            <img src={image} alt="company logo" className='w-[10%]' />
                            <span className='text-[14px] py-4 block group-hover:to-white'>{company}</span>
                        </div>

                        <Link to="/job-details" state={ { id, image, title, location, desc, company, type, level, createdAt } }>
                            <button className='border-2 rounded-[10px] block p-2 w-full
                            text-sm font-semibold text-textColor hover:bg-white
                            group-hover/item:text-textColor group-hover:text-textColor '>Apply Now</button>
                        </Link>

                    </div>
                );

            })}
        </div>
    )
}

export default Jobs