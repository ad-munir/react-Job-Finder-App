/* eslint-disable react/no-unescaped-entities */
import simple from './../../assets/simple.png'

const Value = () => {
    return (
        <div className="mb-1 mt-2">
            <h1 className="text-textColor text-2xl py-8 pb-[3rem] font-bold w-[400px] block">
                The values that hold us true and to account
            </h1>

            <div className="grid gap-40 grid-cols-3 items-center">

                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-1 rounded-[.8rem] bg-inherit-[#dedef8] h-10 w-10 flex items-center">
                            <img src={simple} alt="" className="w-[100%]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[13px] text-textColor opacity-[.7] py-4 font-semibold ">
                        Things being made beautifully simple are at the heart of everything we do.
                    </p>
                </div>

                <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-1 rounded-[.8rem] bg-inherit-[#dedef8] h-10 w-10 flex items-center">
                            <img src={simple} alt="" className="w-[100%]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Innovation
                        </span>
                    </div>
                    <p className="text-[13px] text-textColor opacity-[.7] py-4 font-semibold ">
                        We believe in making things better for everyone, even if just by a little bit!
                    </p>
                </div>

                <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-1 rounded-[.8rem] bg-inherit-[#f3f2ad] h-10 w-10 flex items-center">
                            <img src={simple} alt="" className="w-[100%]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Trust
                        </span>
                    </div>
                    <p className="text-[13px] text-textColor opacity-[.7] py-4 font-semibold ">
                        We work on the basis of creating trust, which can be nurtured through authenticity and transparency.
                    </p>
                </div>

            </div>

            <div className="card my-8 flex justify-between bg-blueColor p-20 rounded-xl">
                <div>
                    <h1 className="text-blueColor text-3xl  font-bold">
                        Ready to switch your career?
                    </h1>
                    <h2 className="text-textColor text-2xl font-bold">
                        Let's get started!
                    </h2>
                </div>
                <a href="#home"className="border-[2px] flex items-center rounded-xl py-1 px-12 text-lg font-semibold bg-white text-blueColor border-blueColor hover:bg-inherit">
                    Get Started
                </a>
            </div>
        </div>
    )
}

export default Value
