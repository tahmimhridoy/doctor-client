import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {
    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if(user){
            fetch(` https://murmuring-brushlands-26743.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json()
        })
        .then(data => {
            setAppointments(data)
        });
        }
    },[user])

    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th>SL No.</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Treatment</th>
                </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((a, index) => 
                        <tr>
                            <th>{index}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>)
                    }
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyAppointments;