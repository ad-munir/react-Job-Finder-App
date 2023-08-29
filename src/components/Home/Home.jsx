import Search from './../Search/Search';
import Value from './../Value/Value';
import data from './../../data'

const Home = () => {
    return (
        <div className="home">
            
            <Search data={data} />
            <Value />
        </div>
    )
}

export default Home