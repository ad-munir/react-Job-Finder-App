import { useEffect, useState } from 'react';
import OfferTypeBtn from '../OfferTypeBtn/OfferTypeBtn';
import { useNavigate } from 'react-router-dom';
import TextEditor from '../TextEditor/TextEditor';


const AddOffer = () => {

    const navigate = useNavigate();

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(0);
    const [location, setLocation] = useState("");

    const handleTypeSelection = (type) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((item) => item !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/new-offer');
    }

    useEffect(() => {
        console.log(selectedTypes); // Log the updated state after each render
        console.log("min " + minSalary)
        console.log("max " + maxSalary)
    }, [minSalary, maxSalary, selectedTypes]);

    return (
        <div className="min-h-screen border rounded-[15px] my-8 mx-48 mb-16">

            <h1 className='font-semibold mb-4'>Offer Details:</h1>

            <div className="text-textColor my-6 mx-10">
                <form action="" onSubmit={handleSubmit}>

                    <h1 className='font-semibold mb-4'>Post Type:</h1>
                    <div className="mb-10 flex flex-wrap gap-2 border">
                        <OfferTypeBtn type={"Full-time"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Part-time"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"CDI"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"CDD"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Stage"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Freelance"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Alternation"} onSelect={handleTypeSelection} />
                    </div>

                    <div className="mb-10 border">

                        <h1 className='font-semibold mb-4'>Salary:</h1>
                        <div className='flex flex-wrap gap-2'>
                            <div className='mb-10'>
                                <label htmlFor="min" className="block mb-2 text-sm font-medium text-gray-900">Minimum:</label>
                                <input
                                    type="number"
                                    name="min"
                                    id="min"
                                    min={1}
                                    onChange={(e) => setMinSalary(e.target.value)}
                                    className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                                />
                            </div>
                            <div className='mb-10'>
                                <label htmlFor="max" className="block mb-2 text-sm font-medium text-gray-900">Maximum:</label>
                                <input
                                    type="number"
                                    name="max"
                                    id="max"
                                    min={1}
                                    onChange={(e) => setMaxSalary(e.target.value)}
                                    className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                                />
                            </div>
                        </div>

                    </div>


                    <div className="mb-10 border">
                        <h1 className='font-semibold mb-4'>Location:</h1>
                        <div className='mb-10'>
                            <input
                                type="text"
                                name="location"
                                onChange={(e) => setLocation(e.target.value)}
                                className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                            />
                        </div>
                    </div>

                    <div className="mb-10 border">
                        <TextEditor />
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