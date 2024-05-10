import { TbDeviceGamepad3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAuth from "../Providers/useAuth";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(console.log("logOut successfully"))
            .catch(error => console.error(error))
    }

    // -----------Theme--------------

    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="navbar my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm font-play dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        <Link to='/'><li><p>Home</p></li></Link>
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
                <Link to='/'>
                    <button className='flex items-center'>
                        <p className='text-7xl text-red-600'><TbDeviceGamepad3></TbDeviceGamepad3></p>
                        <p className='text-2xl text-[#FFD700] font-press'>Elysium</p>
                    </button>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-play text-2xl font-bold">
                    <Link to='/'><li><p>Home</p></li></Link>
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
            <div className="navbar-end gap-2">
                {
                    user ?
                        <div className="flex gap-2 md:gap-4 items-center">
                            <Link to="/profile">
                                <div className="tooltip tooltip-bottom " data-tip={user.displayName}>
                                    <p className="font-semibold text-lg"><img className="h-8 lg:h-10 rounded-full border-t-red-400 border-l-yellow-400 border-b-green-400 border-r-blue-400 border-2" src={user.photoURL} alt="userPhoto" /></p>
                                </div>
                            </Link>
                            <p onClick={handleLogOut} className="btn btn-lg btn-ghost btn-outline border-red-600 border-4 font-play text-2xl text-white  hover:text-[#FFD700] hover:bg-transparent hover:border-[#FFD700] ">Sign Out</p>
                        </div>
                        :
                        <Link to='/login'> <p className="btn btn-lg btn-ghost btn-outline border-red-600 border-4 font-play text-2xl text-white  hover:text-[#FFD700] hover:bg-transparent hover:border-[#FFD700] ">Sign In</p></Link>
                }
                <label className="swap swap-rotate">
                    <input onClick={toggleTheme} type="checkbox" />

                    <MdOutlineLightMode className="swap-on fill-current h-7 w-7 md:h-10 md:w-10  text-red-600  "></MdOutlineLightMode>


                    <MdOutlineDarkMode className="swap-off fill-current h-7 w-7 md:h-10 md:w-10  text-[#FFD700] "></MdOutlineDarkMode >
                </label>
            </div>

        </div >

    );
};

export default NavBar;
