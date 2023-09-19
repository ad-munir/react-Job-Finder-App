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
        <div className="">

            <h1 className='font-semibold text-2xl my-8'>Offer Details:</h1>

            <form 
                onSubmit={handleSubmit}
                className='min-h-screen border rounded-[15px] my-8 mx-52 mb-16'
                >
                <div className="text-textColor my-6 mx-12">

                    <h1 className='font-semibold mb-4'>Post Type:</h1>
                    <div className="mb-10 flex flex-wrap gap-3">
                        <OfferTypeBtn type={"Full-time"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Part-time"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"CDI"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"CDD"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Stage"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Freelance"} onSelect={handleTypeSelection} />
                        <OfferTypeBtn type={"Alternation"} onSelect={handleTypeSelection} />
                    </div>

                    <div className="mb-12">
                        <h1 className='font-semibold mb-4'>Salary:</h1>
                        <div className='flex flex-wrap gap-8'>
                            <div>
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
                            <div>
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


                    <div className="mb-12 flex gap-10 items-center">
                        <h1 className='font-semibold'>Experience:</h1>

                        <select name="level"
                            id="level"
                            className='bg-white border border-gray-600 text-[14px] rounded-[3px] px-4 py-1 '
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Senior">Senior</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                    </div>

                    <div className="mb-12">
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

                    <div className="mb-12">
                        <h1 className='font-semibold mb-4'>Description:</h1>
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

                </div>
            </form>
        </div>
    )
}

export default AddOffer