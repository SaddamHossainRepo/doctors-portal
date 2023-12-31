import React from 'react';

const InforCard = ({card}) => {
    const {name, icon, description, bgClass} = card
    return (
        <div className={`p-6 text-white card md:card-side sm:card-side  shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InforCard;