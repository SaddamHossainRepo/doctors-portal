import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton';

const Banner = () => {
    return (
        <div 
        style={{
            background: `url(${bg})`, backgroundImage: 'cover'
        }}
        className="hero mb-36 text-[#3A4256]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg sm:w-full md:w-1/2 lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;