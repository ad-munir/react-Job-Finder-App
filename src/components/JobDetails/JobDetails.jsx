import { BiBookmarkAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { useLocation } from "react-router-dom"

const JobDetails = () => {

    const locate = useLocation();
    const { id, image, title, location, desc, company, type, level, createdAt } = locate.state;

    return (
        <div className="grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] hover:shadow-lg mb-18">
            
            <div className="header border-b-[2px] h-fit pb-1 flex justify-between ">

                <div className="left">
                    <h1 className="text-3xl font-semibold text-textColor group-hover:text-white">{title}</h1>

                    <h6 className="text-xl text-blueColor border-b w-fit border-blue-400 font-semibold text-xl cursor-pointer">{company}</h6>

                    <div className="flex gap-4 mt-8">
                        <button className='border-2 rounded-[10px] block px-6 h-[40px] bg-blueColor
                                        text-[18px] font-semibold text-white hover:bg-white hover:text-textColor
                                        group-hover/item:text-textColor group-hover:text-textColor '>Apply</button>

                        <button className='border-2 rounded-[10px] block px-2 h-[40px]
                                        text-[24px] font-semibold text-textColor hover:bg-green-500
                                        group-hover/item:text-textColor group-hover:text-textColor '><BiBookmarkAlt /></button>
                    </div>
                </div>
                <div className="flex items-end">
                    <CiLocationOn className=" text-2xl " />
                    <h6 className="text-xl text-[#ccc] ">{location}</h6>
                </div>
            </div>

        </div>
    )
}

export default JobDetails