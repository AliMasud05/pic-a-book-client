import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const{register,handleSubmit}=useForm();
    const onSubmit=data=>{
        console.log(data);
    }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                        <input  {...register("email", {
                            required: "Email Address is required"
                        })} />
                        <input type="number"  {...register("email", {
                            required: "Email Address is required"
                        })} />
                        <input type="number"  {...register("email", {
                            required: "Email Address is required"
                        })} />
                        <input type="number"  {...register("email", {
                            required: "Email Address is required"
                        })} />
                        <input type="number"  {...register("email", {
                            required: "Email Address is required"
                        })} />
                        <input type="number"  {...register("email", {
                            required: "Email Address is required"
                        })} />
                <input type="submit" />
            </form>
        </div>
        </div>
        </div>
    );
};

export default AddProduct;