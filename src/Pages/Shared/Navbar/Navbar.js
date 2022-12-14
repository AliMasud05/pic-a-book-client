import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { logOut,user }=useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .then(err=>console.log(err))
    };

    return (
        <div className="navbar bg-slate-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/categories'>Item 3</Link></li>
                                    <li><Link to='/dashboard/addProduct'>Item 3</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to='/signup'>SignUp</Link></li>
                                    <li><Link to='/login'>Login</Link> </li>
                                </>
                        }

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Pick- <span className='text-xl' >a</span>-Book</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    
                    
                    {
                        user?.uid?
                        <>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                        </>
                        :
                        <>
                                <li><Link to='/signup'>SignUp</Link></li>
                                <li><Link to='/login'>Login</Link> </li>
                        </>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid?
                        <button onClick={handleLogOut}><Link className="btn">Log out</Link></button>
                        : 
                        <Link to='/login' className="btn">Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;