import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment; //treatment is just another name of appointmentOptions with name, slots, _id
    const date = format(selectedDate, 'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }
        // TODO
        // send data to the server
        // and once data is saved then close the modal
        // and display toast
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle " />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg ">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            
                            {
                                slots.map((slot, index) => <option 
                                key={index}
                                value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;