
const Loader = () => {
    return (

        <div role="status" className=" rounded-[10px] w-[250px] max-w-sm p-4 border border-gray-300 shadow animate-pulse md:p-6">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-14 mb-4"></div>


            <p className="p-2 border-t-[2px] mt-8 group-hover:to-white "></p>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4 space-x-3">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                </div>
                <button className='border-2 rounded-[10px] block p-2 w-48 p-4 m-auto my-2' ></button>
        </div>

    )
}

export default Loader


/*
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
                            group-hover/item:text-textColor group-hover:text-textColor '>Apply</button>
                        </Link>

                    </div>
*/