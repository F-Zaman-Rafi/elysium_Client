/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";

const Booking = () => {
    const service = useLoaderData();
    const { serviceName, serviceImage, description, providerImage, providerName, serviceArea, servicePrice } = service;


    return (
        <div>

        </div>
    );
};

export default Booking;