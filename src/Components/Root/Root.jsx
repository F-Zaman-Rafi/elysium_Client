import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Background from "../BackGround/Background";
const Root = () => {
    return (
        <div className="bg-hero-pattern bg-no-repeat min-h-screen text-white ">
            <div className="absolute top-0 left-0 w-full h-full"><Background></Background></div>
            <NavBar className="relative"></NavBar>
            <div className="container mx-auto relative">
                < Outlet ></Outlet >
            </div>
        </div >
    );
};

export default Root;