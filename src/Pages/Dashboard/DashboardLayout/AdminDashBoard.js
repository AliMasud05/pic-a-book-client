import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashBoard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <div className="navbar bg-base-100">
                        <div className="flex-1 lg:hidden">
                            <h1 className="btn btn-ghost normal-case text-xl">Dashboard</h1>
                        </div>
                        <div className="flex-none">
                            <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            </label>
                        </div>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-gray-100 font-bold ">
                        <h1 className="text-2xl py-5">Dashboard</h1>
                        <li><Link to='/' end>Profile</Link></li>
                        <li><Link to=''>All sellers</Link></li>
                        <li><Link to=''>All buyers </Link></li>
                        <li><Link to=''>Reported items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;