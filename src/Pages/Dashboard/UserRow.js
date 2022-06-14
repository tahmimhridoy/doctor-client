import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(` https://murmuring-brushlands-26743.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an Admin')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success(`Successfully made an admin`);
            }
        })
    }

    return (
        <tr>
            <th>{index}</th>
            <th>{email}</th>
            <th>{ role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</th>
            <th><button className="btn btn-xs">Remove User</button></th>
        </tr>
    );
};

export default UserRow;