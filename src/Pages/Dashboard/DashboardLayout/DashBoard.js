import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';

const DashBoard = () => {
    const {user}=useContext(AuthContext);
    const [client,setClient]=useState([])
   //console.log(user.email);
   
    useEffect(() => {
        fetch(`https://pic-a-book-server.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setClient(data))
    }, [user?.email, user])
 
    return (
        <div>
            <Navbar></Navbar>


            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className="navbar bg-base-100">
                        <div className="flex-1 lg:hidden">
                            <h1 className="btn btn-ghost normal-case text-xl">Dashboard</h1>
                        </div>
                        <div className="flex-none">
                            <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            </label>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                    
                        {
                            client[0]?.role === 'buyer' &&
                            <ul className="menu p-4 h-full  bg-gray-100 font-bold ">
                               
                                <li><Link to='/dashboard/myproduct'>My Order </Link></li>
                                <li><Link to=''>Reported items</Link></li>
                            </ul>
                        }
                        {
                            client[0]?.role === 'seller' &&
                            <ul className="menu p-4 h-full  bg-gray-100 font-bold ">
                                <h1 className="text-2xl py-5">Dashboard</h1>
                                <li><Link to='/'>Profile</Link></li>
                                    <li><Link to='dashboard/addProduct'>Add product</Link></li>
                                <li><Link to='/dashboard/myproduct'>My Products </Link></li>
                                <li><Link to=''>Reported items</Link></li>
                            </ul>
                        }
                        {
                            client[0]?.role === 'admin' &&
                            <ul className="menu p-4 h-full scroll-0  bg-gray-100 font-bold ">
                                
                                
                                    <li><Link to='/dashboard/seller'>All Seller</Link></li>
                                    <li><Link to='/dashboard/buyer'>All Buyer</Link></li>
                            </ul>
                        }

                    </ul>

                </div>
            </div> 

          {/* //fra */}
            
            
        </div>
    );
};

export default DashBoard;