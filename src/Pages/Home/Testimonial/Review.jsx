import React from 'react';

const Review = ({ review }) => {
    const { name, review: userReview, location, img } = review
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                {/* <h2 className="card-title">{name}</h2> */}
                <p>{userReview}</p>
                <div className="mt-10 flex items-center ">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full border-2 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div >
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;