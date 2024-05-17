import { Helmet } from "react-helmet";
import ServiceHome from "../Services/ServiceHome";

const AllService = () => {
    return (
        <div className="">
            <Helmet>
                <title>All Service || Elysium</title>
            </Helmet>
            <p className="text-3xl md:text-6xl text-center font-press my-20">All Services</p>
            <ServiceHome></ServiceHome>
        </div>
    );
};

export default AllService;
