import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch(' https://murmuring-brushlands-26743.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(users);
    return (
        <div>
            <h2 className='text-2xl'>All users: {users.length}</h2>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th>SL No.</th>
                    <th>Email</th>
                    <th>Add Admin</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
                        key={user._id}
                        index={index}
                        user = {user}
                        refetch={refetch}
                        ></UserRow>)
                    }
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Users;