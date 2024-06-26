import { useEffect, useState } from "react";
import useAuth from "../../Providers/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ManageServices = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])

    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user-service/${user?.email}`)
        setServices(data)
    }
    useEffect(() => {
        getData()
    }, [user])
    console.log(user.email)


    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`);
            console.log(data);
            toast.success('Deleted Successful');

            getData()

        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Manage Service || Elysium</title>
            </Helmet>
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg md:text-3xl font-press font-medium text-gray-300  '>My Posted Services</h2>

                    <span className='px-3 py-1 text-xs text-pink-300 bg-blue-100 bg-opacity-30 rounded-full '>
                        Services: {services.length}
                    </span>
                </div>
                {
                    (services.length === 0) ?
                        <p className="text-center font-press md:text-3xl leading-loose my-20 max-w-2xl mx-5 md:mx-auto">Seems like you don&apos;t post any service yet!</p>
                        :
                        <div className='flex flex-col mt-6'>
                            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden  md:rounded-lg'>
                                        <table className='min-w-full '>
                                            <thead className='bg-gray-50 bg-opacity-10'>
                                                <tr>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-100'
                                                    >
                                                        <div className='flex items-center gap-x-3'>
                                                            <span>Service Title</span>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100'
                                                    >
                                                        <button className='flex items-center gap-x-2'>
                                                            <span>Price Range</span>
                                                        </button>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100'
                                                    >
                                                        Service Area
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100'
                                                    >
                                                        Description
                                                    </th>

                                                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100'>
                                                        Edit
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white bg-opacity-10  '>
                                                {
                                                    services.map(service =>
                                                        <tr key={service._id}>
                                                            <td className='px-4 py-4 text-sm text-gray-100  whitespace-nowrap'>
                                                                {service.serviceName}
                                                            </td>



                                                            <td className='px-4 py-4 text-sm text-gray-100  whitespace-nowrap'>
                                                                {service.servicePrice}
                                                            </td>
                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <div className='flex items-center gap-x-2'>
                                                                    <p
                                                                        className='px-3 py-1 rounded-full text-black bg-blue-100/60 text-xs'
                                                                    >
                                                                        {service.serviceArea}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td
                                                                title=''
                                                                className='px-4 py-4 text-sm text-gray-300  whitespace-nowrap'
                                                            >
                                                                {service.description.substring(0, 80)}...
                                                            </td>
                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <div className='flex items-center gap-x-6'>
                                                                    <button onClick={() => handleDelete(service._id)} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                                        <svg
                                                                            xmlns='http://www.w3.org/2000/svg'
                                                                            fill='none'
                                                                            viewBox='0 0 24 24'
                                                                            strokeWidth='1.5'
                                                                            stroke='currentColor'
                                                                            className='w-5 h-5'
                                                                        >
                                                                            <path
                                                                                strokeLinecap='round'
                                                                                strokeLinejoin='round'
                                                                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                                                            />
                                                                        </svg>
                                                                    </button>

                                                                    <Link to={`/update-service/${service._id}`}>
                                                                        <button className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                                                                            <svg
                                                                                xmlns='http://www.w3.org/2000/svg'
                                                                                fill='none'
                                                                                viewBox='0 0 24 24'
                                                                                strokeWidth='1.5'
                                                                                stroke='currentColor'
                                                                                className='w-5 h-5'
                                                                            >
                                                                                <path
                                                                                    strokeLinecap='round'
                                                                                    strokeLinejoin='round'
                                                                                    d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </section>
        </div>
    );
};

export default ManageServices;