import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../src/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [users] = useAuthState(auth);
    const [admin] = useAdmin(users);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500'>Welcome to Your Dashboard</h2>
                <Outlet /> 
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                <li><Link to="/dashboard">My Appointment</Link></li>
                <li><Link to="/dashboard/review">My Review</Link></li>
                <li><Link to="/dashboard/history">My History</Link></li>
                { admin && <>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                    <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                    <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                </>}
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;