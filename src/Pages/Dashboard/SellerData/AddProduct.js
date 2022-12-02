import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const {user}=useContext(AuthContext)
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('done');

                }
                else {
                    console.log(data.error)
                }
            })
    }
    return (
        <div className='my-4'>
            <div className='h-[800px] flex justify-center items-center '>
                <div className='w-96 p-7 border'>
                    <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleSubmit(onSubmit)}>
                        <input className="input input-bordered input-secondary w-full "
                           type='text' placeholder='Enter Product Name'
                           {...register("productName", { required: true })} />
                        <input placeholder='Enter your email'
                        defaultValue={user?.email}
                            className="input input-bordered input-secondary w-full" {...register("email", {
                                required: "Email Address is required"
                            })} />
                            <label className='text-left' htmlFor="">Product Category</label>
                        <select  className="input input-bordered input-secondary w-full " {...register("category")}>
                            <option value="Academic">Academic</option>
                            <option value="Scientific">Scientific</option>
                            <option value="Literature">literature</option>
                        </select>
                        <label className='text-left' htmlFor="">Product Condition</label>
                        <select className="input input-bordered input-secondary w-full " {...register("condition")}>
                            <option value="excellent">excellent</option>
                            <option value="good">good</option>
                            <option value="fair">fair</option>
                        </select>
                        <input type="url"  placeholder='Put  Image Url'  {...register("picture", {
                            required: "Picture is required"
                        })} className="input input-bordered input-secondary w-full " />
                       
                        <input placeholder='Enter Seller Name'
                        defaultValue={user?.displayName}
                        className="input input-bordered input-secondary w-full " type="text"  {...register("sellerName", {
                            required: "sellerName is required"
                        })} />
                        <input placeholder='Enter your city' className="input input-bordered input-secondary w-full " type="text"  {...register("Address", {
                            required: "Address is required"
                        })} />
                        <input placeholder='Enter resale price' className="input input-bordered input-secondary w-full " type="text"  {...register("resalePrice", {
                            required: "resale price is required"
                        })} />
                        <input placeholder='Enter Original price' className="input input-bordered input-secondary w-full " type="text"  {...register("originalPrice", {
                            required: "resale price is required"
                        })} />
                        <input placeholder='Enter uses year' className="input input-bordered input-secondary w-full " type="text"  {...register("usesYear", {
                            required: "uses year is required"
                        })} />
                        <input placeholder='Enter purchase date' className="input input-bordered input-secondary w-full " type="text"  {...register("registered", {
                            required: "Purchase date is required"
                        })} />
                        <input type="submit" className='btn btn-success' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;