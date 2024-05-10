import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Background from "../BackGround/Background";
const Root = () => {
    return (
        <div className=" text-white ">
            <div className="absolute top-0 left-0 w-full h-full"><Background></Background></div>
            <div className="relative">
                <NavBar ></NavBar>
                <div className="container mx-auto">
                    < Outlet ></Outlet >
                </div>
            </div>
        </div >
    );
};

export default Root;