import banner from './../../assets/banner1.png'
const AddOffer = () => {
    return (
        <div className="min-h-screen border rounded-[15px] my-8 mx-48">
            <div className="banner bg-inherit h-[340px] relative">
                <div className="border text-blueColor text-8xl w-[390px] h-[44px] absolute left-[170px] top-[57px]"></div>
            </div>

            <div className="text-textColor my-6 mx-10">
                <h1 className='font-semibold mb-4'>As you have never posted a job offer, you will need to create an employer account.</h1>

                <form action="">

                    <div className='mb-10'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Company name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                            placeholder="company name"
                        />
                    </div>

                    <div className='mb-10'>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">The number of employees in your company:</label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                            placeholder="number of employees"
                        />
                    </div>

                    <div className='mb-10'>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Your phone number:</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                            placeholder="your phone number"
                        />
                    </div>

                    <div className="mb-10 flex justify-end">
                        <button
                            type="submit"
                            className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                            Continue
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddOffer