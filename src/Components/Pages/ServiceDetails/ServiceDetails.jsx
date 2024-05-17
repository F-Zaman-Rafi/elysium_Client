/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, serviceName, serviceImage, description, providerImage, providerName, serviceArea, servicePrice } = service;
    console.log(service)

    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-transparent rounded-lg shadow-md font-play dark:bg-transparent border-[#FFD700] border-2 mx-5 md:mx-auto">
                <img
                    className="object-cover w-full h-64"
                    src={serviceImage}
                    alt="Article"
                />
                <div className="p-6">
                    <div>
                        <span className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">{servicePrice}</span>
                        <p
                            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                            tabIndex="0"
                            role="link"
                        >
                            {serviceName}
                        </p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex md:flex-row flex-col md:items-center gap-5 md:justify-between">
                            <div className="flex items-center">
                                <img
                                    className="object-cover h-10"
                                    src={providerImage}
                                    alt="Avatar"
                                />
                                <p
                                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                    tabIndex="0"
                                    role="link"
                                >
                                    Service Provider : {providerName}
                                </p>
                            </div>
                            <span className=" mx-1 text-xs text-gray-600 dark:text-gray-300">Service Area: {serviceArea}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link to={`/book-service/${_id}`} service={service}><p className="mt-10 bg-transparent border-[#FFD700] btn w-full hover:bg-transparent hover:border-red-600 hover:text-[#08FF08]">Book Now</p></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;