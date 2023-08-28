
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
                    We always make our seekers and companu=ies find the best jobs and employers the best talents.
                </p>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold text-white ">
                    Company
                </span>
            </div>
        </div>
    )
}

export default Footer