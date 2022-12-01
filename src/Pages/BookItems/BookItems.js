import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookItem from './BookItem';

const BookItems = () => {
    const products =useLoaderData();
    //console.log(products)
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center'>
            {
                products.map(product=><BookItem
                key={product._id}
                product={product}
                ></BookItem>)
            }
        </div>
    );
};

export default BookItems;