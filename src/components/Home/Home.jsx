import Search from './../Search/Search';
import Value from './../Value/Value';
import { useEffect, useState } from 'react';
import { request } from '../../Service/AuthHelper';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        
        request(
            "GET",
            "/api/v1/data/offers",
            {}
        )
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, [])

    return (
        <div className="home">
            
            <Search data={data} />
            <Value />
        </div>
    )
}

export default Home