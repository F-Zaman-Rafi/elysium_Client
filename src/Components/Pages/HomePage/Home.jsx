import { Link } from "react-router-dom";
import ServiceHome from "../Services/ServiceHome";
import Carousel from "./Carousel";
import { Helmet } from "react-helmet";
import AwesomeSupport from "../../Extra 1/AwesomeSupport";
import Testimonials from "../../Extra 2/Testimonials";
import TrustedConsumers from "../../Extra 3/TrustedConsumers";

const Home = () => {

    return (
        <div className="text-whitel">
            <Helmet>
                <title>Home || Elysium</title>
            </Helmet>
            <Carousel></Carousel>
            <p className="md:text-6xl text-xl text-center font-press my-20 md:my-40">Popular Services</p>
            <ServiceHome></ServiceHome>
            <div className='max-w-2xl mx-auto'>
                <Link to='/all-services'><p className='btn w-full my-5 bg-[#FFD700] text-black hover:bg-transparent hover:text-[#FFD700]'>All Services</p></Link>
            </div>
            <div className="mt-32">
                <AwesomeSupport></AwesomeSupport>
            </div>

        </div>
    );
};

export default Home;