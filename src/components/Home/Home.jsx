import Search from './../Search/Search';
import Value from './../Value/Value';
import { useEffect, useState } from 'react';
import { request } from '../../Service/AuthHelper';

const Home = () => {

    return (
        <div className="home" id='home'>
            <div className='h-12 w-max flex items-center p-4 my-6 -ml-28 font-semibold text-textColor rounded' id='add-offer-btn'>
                Entreprise/ Add an offer
            </div>
            <Search />
            <Value />
        </div>
    )
}

export default Home