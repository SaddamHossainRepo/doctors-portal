import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/Whitening.png'

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            img: fluoride,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            img: Whitening,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='mt-16 text-[#3A4256]'>
            <div className='text-center'>
                <h2 className='text-primary font-bold text-xl'>OUR SERVICES</h2>
                <h1 className='text-3xl '>Services We Provide</h1>
            </div>

            <div className='mt-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;