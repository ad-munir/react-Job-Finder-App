import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <div className="footer mb-5 bg-blueColor rounded-xl p-8 rounded-t-xl grid grid-cols-1 md:grid-cols-5 gap-4 m-auto items-start justify-center">
            <div className="col-span-1 md:col-span-2">
                <div className="logoDiv">
                    <h1 className="logo text-3xl  text-white pb-4">
                        <strong>Job</strong>Finder
                    </h1>
                </div>
                <p className="text-white opacity-70 leading-7">
                    We always make our seekers and companies find the best jobs and employers the best talents.
                </p>
            </div>
            <div className="col-span-1 md:col-span-1">
                <span className="divTitle text-xl font-semibold pb-4 text-white ">
                    Company
                </span>
                <ul className="text-white opacity-70 hover:opacity-100">
                    <li className="py-2">Account</li>
                    <li className="py-2">Support Center</li>
                    <li className="py-2">Feedback</li>
                    <li className="py-2">Contact Us</li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
                <span className="divTitle text-xl font-semibold pb-4 text-white ">
                    Resources
                </span>
                <ul className="text-white opacity-70 hover:opacity-100">
                    <li className="py-2">Events</li>
                    <li className="py-2">Promo</li>
                    <li className="py-2">Request Demo</li>
                    <li className="py-2">Careers</li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
                <span className="divTitle text-xl font-semibold pb-4 text-white ">
                    Support
                </span>
                <ul className="text-white opacity-70 hover:opacity-100">
                    <li className="py-2">Help Center</li>
                    <li className="py-2">FAQs</li>
                    <li className="py-2">Terms</li>
                    <li className="py-2">Privacy Policy</li>
                </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
                <span className="divTitle text-xl font-semibold text-white ">
                    Contact
                </span>
                <p className="text-white text-sm pt-2 pb-4">monirayad29@gmail.com</p>
                <div className="icons flex gap-4">
                    <AiFillInstagram className="bg-white p-2 h-10 w-10 rounded-full icon text-blueColor" />
                    <BsFacebook className="bg-white p-2 h-10 w-10 rounded-full icon text-blueColor" />
                    <AiOutlineTwitter className="bg-white p-2 h-10 w-10 rounded-full icon text-blueColor" />
                    <AiFillLinkedin className="bg-white p-2 h-10 w-10 rounded-full icon text-blueColor" />
                </div>
            </div>
        </div>
    )
}

export default Footer