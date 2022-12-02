import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';


const MyProduct = () => {
    const {user}=useContext(AuthContext);
    const [items, setItems]=useState([]);
    const[dlt, setDlt] = useState(true)
  useEffect(()=>{
      fetch(`http://localhost:5000/myproduct?email=${user?.email}`,{
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then(res=>res.json())
      .then(data=>setItems(data))
  },[user?.email,dlt]);

    const deleteProduct = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/categories/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.error('delete complete')
            setDlt(!dlt);
        })
    };
    const handleAdd = (id) => {
        const add = {
            advertise: true,
        };
        fetch(`http://localhost:5000/books/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(add),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                
            });
    };
    

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {items.length === 0 ? <h1 className='text-center w-full'>No product</h1> :
                        items.map((item, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td> <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={item?.picture} alt='' />
                                </div>
                            </div> </td>
                            <td><span>product-name: </span>{item?.productName}</td>
                            <td>Category :{item?.category}</td>
                            <td>
                                <button className='btn border-none bg-red-600 text-white mr-3 ' onClick={() => deleteProduct(item._id)} > Delete</button>
                                <button className='btn border-none bg-orange-500 text-white' onClick={() => handleAdd(item._id)} > Advertise</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProduct;