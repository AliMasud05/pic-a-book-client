import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const [delt, setDelt] = useState(true);
    const [tick, setTick] = useState(false);
    const [sellers, setSellers] = useState([])
    useEffect(() => {
        fetch('https://pic-a-book-server.vercel.app/sellers')
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [delt, tick])
    const deleteUser = (id) => {
        console.log(id);
        fetch(`https://pic-a-book-server.vercel.app/sellers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.error('Review deleted')
                setDelt(!delt)
            })
    }
    const verify = (id) => {

        const add = {
            tick: tick
        }
        fetch(`https://pic-a-book-server.vercel.app/verify/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTick(!tick)
                toast.done('Verified')
            })
    }
    console.log(sellers)
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {sellers.length === 0 ? <h1 className='text-center w-full'>No User</h1> :
                        sellers.map((p, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{p?.email}</td>
                            <td>{p?.role}</td>
                            <td>
                                <button className='btn border-none bg-red-600 text-white mx-5' onClick={() => deleteUser(p._id)}> Delete</button>
                                {p?.tick ?
                                    <button className='btn border-none bg-green-400' onClick={() => { verify(p._id) }}> Verified</button> :
                                    <button className='btn border-none bg-blue-500 text-white' onClick={() => { verify(p._id) }}> Verify</button>}
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
          
        </div>
    );
};

export default AllSellers;