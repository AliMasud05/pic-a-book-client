import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://pic-a-book-server.vercel.app/booktitle');
            const data = await res.json();
            return data;
        }
    });
    //console.log(users);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-3'>
            {
                users.map(user => <Category 
                key={user._id}
                user={user}
                ></Category>)
            }
            
        </div>
    );
};

export default Categories;