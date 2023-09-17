import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { BsPlus, BsPlusLg } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import { TbPlus } from 'react-icons/tb';
import OfferTypeBtn from '../OfferTypeBtn/OfferTypeBtn';


const AddOffer = () => {


    const [isClosed, setIsClosed] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        // Handle the button click action here
        setIsClosed(!isClosed);
    }

    return (
        <div className="min-h-screen border rounded-[15px] my-8 mx-48 mb-16">

            <h1 className='font-semibold mb-4'>Offer Details:</h1>

            <div className="text-textColor my-6 mx-10">
                <form action="">

                    <h1 className='font-semibold mb-4'>Post Type:</h1>
                    <div className="mb-10 flex flex-wrap gap-2 border">
                        <OfferTypeBtn type={"Full-time"} />
                        <OfferTypeBtn type={"Part-time"} />
                        <OfferTypeBtn type={"CDI"} />
                        <OfferTypeBtn type={"CDD"} />
                        <OfferTypeBtn type={"Stage"} />
                        <OfferTypeBtn type={"Freelance"} />
                        <OfferTypeBtn type={"Alternation"} />
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