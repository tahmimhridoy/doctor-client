import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-secondary text-2xl font-semibold">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">
                <button disabled={slots.length === 0} class="btn btn-secondary text-white uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;