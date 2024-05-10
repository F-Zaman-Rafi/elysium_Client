// import { useState } from 'react';
// import { TbDeviceGamepad3 } from 'react-icons/tb';

import { TbDeviceGamepad3 } from "react-icons/tb";

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm font-play dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        <li><p>Home</p></li>
                        <li><p>Services</p></li>
                        <li>
                            <p>Dashboard</p>
                            <ul className="p-2">
                                <li><p>Add Service</p></li>
                                <li><p>Manage Service</p></li>
                                <li><p>Booked Services</p></li>
                                <li><p>Service-To-Do</p></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className=' flex items-center'>
                    <p className='text-7xl text-red-600'><TbDeviceGamepad3></TbDeviceGamepad3></p>
                    <p className='text-2xl text-yellow-500 font-press'>Elysium</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-play text-2xl font-bold">
                    <li><p>Home</p></li>
                    <li><p>Services</p></li>
                    <li>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-2">
                                <li><p>Add Service</p></li>
                                <li><p>Manage Services</p></li>
                                <li><p>Booked Services</p></li>
                                <li><p>Service-To-Do</p></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <p className="btn">Button</p>
            </div>
        </div>

    );
};

export default NavBar;
