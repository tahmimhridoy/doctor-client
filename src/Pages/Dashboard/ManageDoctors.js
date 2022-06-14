import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const {data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Barer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Doctor: {doctors.length}</h2>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th>SL No.</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Sepcialty</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor, index) => <DoctorRow
                        key={doctor._id}
                        index={index}
                        doctor={doctor}
                        refetch={refetch}
                        ></DoctorRow>)
                    }
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageDoctors;