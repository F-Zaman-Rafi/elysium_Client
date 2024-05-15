/* eslint-disable react/prop-types */

import ServiceCard from "./ServiceCard";

const ServiceHome = ({ services }) => {
    return (
        <div className="mt-40">
            <p className="text-6xl text-center font-press mb-40">Services</p>

            <div className=" space-y-16">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceHome;
