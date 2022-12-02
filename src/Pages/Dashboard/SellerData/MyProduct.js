import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProduct = () => {
    const {user}=useContext(AuthContext);
    const [items, setItems]=useState([]);
  useEffect(()=>{
      fetch(`http://localhost:5000/myproduct?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>setItems(data))
  },[user?.email])

    return (
        <div>
            {
               items.length===0 ? <h1>No Product here</h1>
               :
               items.map(item=>)
            }
        </div>
    );
};

export default MyProduct;