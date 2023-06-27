import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="lg:mt-24  md:mt-12 gap-20  card lg:card-side rounded-none">
            <figure className='ml-24 lg:w-[548px] lg:h-[576px] md:w-screen sm:w-[322px] sm:h-[406px]'><img src={treatment} className='hidden  md:block' alt="Movie" /></figure>
            <div className="lg:mt-[130px] sm:mt-0   lg:w-[497px] lg:h-[347px]">
          <h2 className="text-5xl font-bold text-dental-text">Exceptional Dental Care, on Your Terms</h2>
          <p className="mt-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <div className="mt-10">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        </div>
    );
};

export default DentalCare;