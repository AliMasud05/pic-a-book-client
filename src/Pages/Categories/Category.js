import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({user}) => {
    const { categoryName, picture, _id }=user;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {categoryName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{_id}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <Link to={`/category/${_id}`} ><button className='btn btn-outline'>see item</button></Link>
            </div>
        </div>
    );
};

export default Category;