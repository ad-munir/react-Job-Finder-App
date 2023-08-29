import { BiBookmarkAlt } from "react-icons/bi";
import { IoBagRemoveSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useLocation } from "react-router-dom"

const JobDetails = () => {

    const locate = useLocation();
    const { id, image, title, location, desc, company, type, level, createdAt } = locate.state;

    return (
        <div className="grid gap-4 bg-slate-50 rounded-[10px] p-12 hover:shadow-lg mb-18">
            
            <div className="border-b-[2px] h-fit pb-1 flex justify-between ">

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

            <div className="p-1 border-b">
                <h6 className="text-black text-xl font-semibold">Job details</h6>
                <p className="text-textColor text-[15px]">Find out how the criteria for this position match your job preferences.</p>
                <p className="text-textColor text-[15px]">Published on {createdAt}.</p>

                <div className="my-2 flex gap-2 items-center">
                    <IoBagRemoveSharp className="text-xl text-gray-800 "/>
                    <h6 className="text-[18px] text-gray-800 font-semibold"> Job type</h6>
                </div>

                <h6 className="w-fit ml-6 py-1 px-4 font-semibold bg-gray-700 border text-white rounded">{type}</h6>
            </div>

            <div>
                <h6 className="text-black text-xl py-2 font-semibold">Full job description</h6>
                <h6 className="text-[17px] py-2 font-semibold text-textColor">{title}</h6>
                <p className="text-textColor">{desc}</p>
            </div>

        </div>
    )
}

export default JobDetails