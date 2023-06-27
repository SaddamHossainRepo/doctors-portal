import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';
const ContactUs = () => {
    return (
        <div
        style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover'
        }}
        className="hero mt-36  bg-base-200">
            <div className="hero-content flex-col ">
            <h2 className="text-primary text-xl font-bold">Contact Us</h2>
            <h4 className="text-4xl text-white">Stay connected with us</h4>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body gap-5 mb-10">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input bg-white " />
                        </div>
                        <div className="form-control"> 
                            <input type="text" placeholder="Subject" className="input bg-white" /> 
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Message" className="input bg-white" />
                        </div>
                        <div className="form-control mt-6">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;