/* eslint-disable react/prop-types */
import axios from 'axios'
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from 'react-router-dom';

const ServiceHome = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/services`)
            setServices(data)
        }
        getData()
    }, [])
    console.log(services)

    return (
        <div className="mt-40">

            <div className=" space-y-16">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='max-w-2xl mx-auto'>
                <Link to='/all-services'><p className='btn w-full my-5 bg-[#FFD700] text-black hover:bg-transparent hover:text-[#FFD700]'>All Services</p></Link>
            </div>
        </div>
    );
};

export default ServiceHome;
