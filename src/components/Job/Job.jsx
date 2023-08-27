import { BiTimeFive } from 'react-icons/bi';

import logo1 from './../../assets/logo1.png'


const data = [
    {
        id: 1,
        image: logo1,
        title: "web developer",
        location: "Canada",
        time: "Now",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis molestias deserunt illum ullam laborum facilis modi rerum voluptate est culpa molestiae, laudantium, vero quasi debitis enim ducimus iste asperiores quas.",
        company: "Devo Lin Co."
    }
];
const Job = () => {
    return (
        <div className="JobsContainer flex gap-10 justify-center flex-wrap items-center py-10">

            {data.map({ id, image, title, location, time, desc, company }) => 
                 (
            <div className="group group/item singleJob w-[250px] p-5 bg-white rounded-[10px]
                hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className="flex justify-between items-center gap-4">
                    <h1 className="text-[16px] font-semibold text-textColor
                        group-hover:text-white">Web Developer</h1>
                    <span className='flex items-center text-[#ccc] gap-1 '>
                        <BiTimeFive />Now
                    </span>
                </span>
                <h6 className="text-[#ccc]">Canada</h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:to-white ">

                </p>

                <div className="company flex items-center gap-2">
                    <img src={logo1} alt="company logo" className='w-[10%]' />
                    <span className='text-[14px] py-4 block group-hover:to-white'>Devo Lin Co.</span>
                </div>

                <button className='border-2 rounded-[10px] block p-2 w-full
                    text-sm font-semibold text-textColor hover:bg-white
                    group-hover/item:text-textColor group-hover:text-white '>Apply Now</button>
            </div>
            )
            }


        </div>
    )
}

export default Job