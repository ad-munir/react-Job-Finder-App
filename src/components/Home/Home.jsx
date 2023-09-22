import { useContext, useEffect } from 'react';
import Search from './../Search/Search';
import Value from './../Value/Value';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/Contexts';
import { getAuthToken, getUserData, setAuthHeader } from '../../Service/AuthHelper';

const Home = () => {

    const { loggedIn, setLoggedIn } = useContext(UserContext);

    // useEffect(() => {
    //     if(getAuthToken() !== null && getAuthToken() !== 'null')
    //         setLoggedIn(true);
    // }, [])

    console.log(getUserData())
    console.log(getUserData().companyId)
    const companyId = getUserData().companyId;
    console.log("companyId : " + companyId);

    return (
        <div className="home" id='home'>

            {loggedIn ?
                <Link to={companyId? '/new-offer':'/create-employer-account'}
                    state={ {companyId: companyId}}
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