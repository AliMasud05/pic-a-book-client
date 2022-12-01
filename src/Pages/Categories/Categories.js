import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/booktitle');
            const data = await res.json();
            return data;
        }
    });
    //console.log(users);

    return (
        <div>
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