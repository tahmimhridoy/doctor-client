import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
        className="text-center py-12"
        >
            <div>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
            </div>
            <div className='flex flex-col items-center mt-12'>
                <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs my-5" />
                <textarea class="textarea textarea-bordered w-full max-w-xs mb-6" placeholder="Your Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;