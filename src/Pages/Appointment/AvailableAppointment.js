import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModel from './BookingModel';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () => fetch(` https://murmuring-brushlands-26743.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))


    if(isLoading){
        return <Loading />
    }
    return (
        <div className='px-16'>
            <h2 className='text-xl text-secondary font-bold text-center'>Available Appointment on: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModel 
            setTreatment={setTreatment} 
            date={date} 
            treatment={treatment} 
            refetch={refetch}
            ></BookingModel>}
        </div>
    );
};

export default AvailableAppointment;