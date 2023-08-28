
const Footer = () => {
    return (
        <div className="footer p-20 mb-5 bg-blueColor rounded-xl gap-[8] grid grid-cols-5 m-auto items-center justify-center">
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-6">
                        <strong>Job</strong>Search
                    </h1>
                </div>
                <p className="text-white pb-3 opacity-70 leading-7">
                    We always make our seekers and companies find the best jobs and employers the best talents.
                </p>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold text-white ">
                    Company
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">About us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Features</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">News</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Faq</li>
                </div>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold text-white ">
                    Support
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">About us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Features</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">News</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Faq</li>
                </div>
            </div>
        </div>
    )
}

export default Footer