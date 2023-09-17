import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'

const OfferTypeBtn = ({type, onSelect}) => {

    const [isClosed, setIsClosed] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsClosed(!isClosed);
        onSelect(type);
    }
    return (
        <div>
            <button
                className={`offer-type-btn ${isClosed ? 'closed' : ''}`}
                onClick={handleClick}
            >
                {isClosed ? (
                    <AiOutlineCheck className="icon" />
                ) : (
                    <BiPlus className="icon" />
                )}
                {type}
            </button>
        </div>
    )
}

export default OfferTypeBtn