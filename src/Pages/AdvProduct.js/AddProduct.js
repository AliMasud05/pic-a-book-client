import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../BookItems/BookItem';

const AdvProduct = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://pic-a-book-server.vercel.app/advertiseBooks')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='my-48'>
            <div className=' text-center'>
                <h1 className='text-3xl font-bold  uppercase'> Most popular books</h1>
            </div>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 m-5 place-items-center'>
                {
                    books.map(product => <BookItem
                        key={product._id}
                        product={product}
                    ></BookItem>)
                }
            </div>
            
        </div>
    );
};

export default AdvProduct;