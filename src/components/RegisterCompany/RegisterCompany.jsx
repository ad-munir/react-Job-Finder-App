import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { request } from '../../Service/AuthHelper';
const RegisterCompany = () => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [nbEmployees, setNbEmployees] = useState('');
    const [recruiterPhone, setRecruiterPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submit");


        request(
            'POST',
            '/api/v1/data/companies',
            {
                name,
                desc,
                nbEmployees,
                recruiterPhone,
            }
        )

        .then(
            (response) => {
                console.log(response);
                navigate('/new-offer', { state: { companyId: response.data.id } })
        }).catch(
            (error) => {
                console.log(error);
                alert("error");
            }
        );

    }

    return (
        <div className="min-h-screen border rounded-[15px] my-8 mx-48">
            <div className="banner bg-inherit h-[340px] relative">
                <div className="border text-blueColor text-8xl w-[390px] h-[44px] absolute left-[170px] top-[57px]"></div>
            </div>

            <div className="text-textColor my-6 mx-10">
                <h1 className='font-semibold mb-4'>As you have never posted a job offer, you will need to create an employer account.</h1>

                <form onSubmit={handleSubmit}>

                    <div className='mb-10'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Company name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                            placeholder="company name"
                        />
                    </div>

                    <div className='mb-10'>
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Company description:</label>
                        <textarea
                            type="text"
                            name="desc"
                            id="desc"
                            rows={10}
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                        />
                    </div>

                    <div className='mb-10'>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">The number of employees in your company:</label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            min={1}
                            value={nbEmployees}
                            onChange={(e) => setNbEmployees(e.target.value)}
                            className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                            placeholder="number of employees"
                        />
                    </div>

                    <div className='mb-10'>
                        <label htmlFor="recruiterPhone" className="block mb-2 text-sm font-medium text-gray-900">Your phone number:</label>
                        <input
                            type="text"
                            name="recruiterPhone"
                            id="recruiterPhone"
                            value={recruiterPhone}
                            onChange={(e) => setRecruiterPhone(e.target.value)}
                            className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg block w-full p-2"
                            placeholder="Phone number (1234-456-7890)"
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

export default RegisterCompany