import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className='px-16'>
            <h2 className='text-xl text-secondary font-bold text-center'>Available Appointment on: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;