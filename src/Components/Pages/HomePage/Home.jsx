import ServiceHome from "../Services/ServiceHome";
import Carousel from "./Carousel";

const Home = () => {

    return (
        <div className="text-whitel">
            <Carousel></Carousel>
            <p className="text-6xl text-center font-press my-40">Services</p>
            <ServiceHome></ServiceHome>
        </div>
    );
};

export default Home;