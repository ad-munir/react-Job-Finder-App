import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <div className="footer p-20 mb-5 bg-blueColor rounded-xl gap-8 grid grid-cols-5 m-auto items-start justify-center">
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-6">
                        <strong>Job</strong>Finder
                    </h1>
                </div>
                <p className="text-white pb-[13px] opacity-70 leading-7">
                    We always make our seekers and companies find the best jobs and employers the best talents.
                </p>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-6 text-white ">
                    Company
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Acount</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Support Center</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Feedback</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Contact Us</li>
                </div>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-6 text-white ">
                    Resources
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Events</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Promo</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Req Demo</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Careers</li>
                </div>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-6 text-white ">
                    Support
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Events</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Promo</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Req Demo</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1] ">Careers</li>
                </div>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold text-white ">
                    Contact
                </span>
                <div>
                    <small className="text-[14px] text-white">monirayad29@gmail.com</small>
                    <div className="icons flex gap-4 py-4">
                    <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor "/>
                    <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor "/>
                    <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor "/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer