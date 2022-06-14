import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch}) => {
    const {name, specialty, img, email} = doctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        })
        .then( res => res.json() )
        .then(data => {
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted`)
                refetch();
            }
        })
    }

    return (
            <tr>
                <th>{index + 1}</th>
                <th>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
                </th>
                <th>{name}</th>
                <th>{specialty}</th>
                <th><button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button></th>
            </tr>
    );
};

export default DoctorRow;