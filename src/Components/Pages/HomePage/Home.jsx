import { useLoaderData } from "react-router-dom";
import ServiceHome from "../Services/ServiceHome";
import Carousel from "./Carousel";

const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className="text-whitel">
            <Carousel></Carousel>
            <ServiceHome services={services}></ServiceHome>
        </div>
    );
};

export default Home;