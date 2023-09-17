import { useContext } from 'react';
import Search from './../Search/Search';
import Value from './../Value/Value';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/Contexts';

const Home = () => {

    const { loggedIn } = useContext(UserContext);

    return (
        <div className="home" id='home'>

            {!loggedIn ?
                <Link to={'/create-employer-account'}
                    className='h-12 w-max flex items-center  my-6  p-4 -ml-28 font-semibold text-textColor rounded cursor-pointer'
                    id='add-offer-btn'>
                    Entreprise/ Add an offer
                </Link>

                :
                <div className="h-12  my-3"></div>
            }
            <Search />
            <Value />
        </div>
    )
}

export default Home