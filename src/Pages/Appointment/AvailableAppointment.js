import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices);
    },[])
    return (
        <div>
            <h2 className='text-xl text-secondary font-bold text-center'>Available Appointment on: {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;