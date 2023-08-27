
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
    return (
        <div className="search grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] ">
            <form action="">

                <div className="firstInput flex justify-between items-center rounded-[8px] gp-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700 ">

                    <div className="flex gap-2 items-center">
                        <AiOutlineSearch />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Search