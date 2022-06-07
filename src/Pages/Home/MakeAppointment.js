import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointmemt</h3>
                <h2 className='text-3xl text-white py-3'>Make an Appointmemt Today</h2>
                <p className='text-white pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus maiores ipsam nesciunt explicabo iure asperiores consequatur soluta, fuga, sit rerum, quidem fugit nostrum. Quae voluptatibus non dicta totam perspiciatis, provident ab illo cum cupiditate nihil veritatis, a, molestias eius.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;