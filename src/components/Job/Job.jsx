import { BiTimeFive } from 'react-icons/bi';

import logo1 from './../../assets/logo1.png'
import logo2 from './../../assets/logo2.png'
import logo3 from './../../assets/logo3.png'
import logo4 from './../../assets/logo4.png'

const data = [
    {
        id: 1,
        image: logo1,
        title: "Web Developer",
        location: "Canada",
        time: "1Day",
        desc: "Join our dynamic team as a Web Developer. You'll work on exciting projects and collaborate with talented individuals to build responsive and user-friendly web applications.",
        company: "Devo Lin Co."
    },
    {
        id: 2,
        image: logo2,
        title: "Frontend Developer",
        location: "United States",
        time: "1H",
        desc: "Are you passionate about creating beautiful and interactive user interfaces? Join us as a Frontend Developer and bring cutting-edge designs to life with modern web technologies.",
        company: "TechCo"
    },
    {
        id: 3,
        image: logo3,
        title: "Full Stack Engineer",
        location: "Germany",
        time: "2H",
        desc: "Seeking a talented Full Stack Engineer to work on end-to-end development projects. You'll have the opportunity to contribute to both frontend and backend components of our applications.",
        company: "CodeWorks"
    },
    {
        id: 4,
        image: logo4,
        title: "UI/UX Designer",
        location: "France",
        time: "3H ",
        desc: "We're looking for a creative UI/UX Designer to craft visually stunning and intuitive user interfaces. Your designs will enhance user experiences and drive engagement across our products.",
        company: "PixelCraft"
    }
];

const Job = () => {
    return (
        <div className="JobsContainer flex gap-10 justify-center flex-wrap items-center py-10">

            {data.map(({ id, image, title, location, time, desc, company }) => {
                return (
                    <div key={id} className="group group/item singleJob w-[250px] p-5 bg-white rounded-[10px]
                hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                        <span className="flex justify-between items-center gap-4">
                            <h1 className="text-[16px] font-semibold text-textColor
                        group-hover:text-white">{title}</h1>
                            <span className='flex items-center text-[#ccc] gap-1'>
                                <BiTimeFive />{time}
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

                        <button className='border-2 rounded-[10px] block p-2 w-full
                    text-sm font-semibold text-textColor hover:bg-white
                    group-hover/item:text-textColor group-hover:text-textColor '>Apply Now</button>
                    </div>
                );

            })}
        </div>
    )
}

export default Job