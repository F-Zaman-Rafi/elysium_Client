/* eslint-disable react/prop-types */
import axios from 'axios'
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

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

        </div>
    );
};

export default ServiceHome;
