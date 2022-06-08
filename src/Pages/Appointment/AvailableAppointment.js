import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
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
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModel setTreatment={setTreatment} date={date} treatment={treatment} ></BookingModel>}
        </div>
    );
};

export default AvailableAppointment;