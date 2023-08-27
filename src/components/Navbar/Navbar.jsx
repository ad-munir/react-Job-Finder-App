
const Navbar = () => {
    return (
        <nav className="navBar flex justify-between items-center p-[3rem]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-blueColor">
                    <strong>Job</strong>Search
                </h1>
            </div>

            <div className="menu flex gap-8">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
            </div>
        </nav>
    )
}

export default Navbar


// <nav className="relative select-none bg-primary lg:flex lg:items-stretch w-full">
//             <div className="flex flex-no-shrink items-stretch h-12">
//                 <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Tailwind</a>
//                 <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Css</a>
//                 <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
//                     <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
//                     <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
//                 </button>
//             </div>
//             <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
//                 <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
//                     <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item 1</a>
//                     <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item 2</a>
//                     <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item 3</a>
//                 </div>
//             </div>
//         </nav>