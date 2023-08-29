import { useLocation } from "react-router-dom"

const JobDetails = () => {

    const locate = useLocation();
    const { id, image, title, location, desc, company, type, level, createdAt } = locate.state;

    return (
        <div className="grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] hover:shadow-lg mb-18">
            <div className="header border-b-[2px] ">
                <h1 className="text-3xl font-semibold text-textColor group-hover:text-white">{title}</h1>

                <h6 className="text-xl text-blueColor border-b w-fit border-blue-400">{company}</h6>
                <h6 className="text-xl text-[#ccc]">{location}</h6>
            </div>
        </div>
    )
}

export default JobDetails