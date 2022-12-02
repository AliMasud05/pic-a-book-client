import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
  
        const [delt, setDelt] = useState(true);
    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/buyers',{
            headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }})
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [delt])
    const deleteUser = (id) => {
        fetch(`http://localhost:5000/buyers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.error('Review deleted')
                setDelt(!delt)
            })
    }
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

                    {buyers.length === 0 ? <h1 className='text-center w-full'>No User</h1> :
                        buyers.map((p, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{p?.email}</td>
                            <td>{p?.role}</td>
                            <td>
                                <button className='btn border-none bg-red-600 text-white' onClick={() => deleteUser(p._id)}> Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            
        </div>
    );
};

export default AllBuyers;