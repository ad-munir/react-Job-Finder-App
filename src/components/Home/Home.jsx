import Search from './../Search/Search';
import Value from './../Value/Value';
import { useEffect, useState } from 'react';
import { request } from '../../Service/AuthHelper';

const Home = () => {

    return (
        <div className="home" id='home'>
            <Search />
            <Value />
        </div>
    )
}

export default Home