import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Background from "../BackGround/Background";
import Footer from "../Footer/Footer";
const Root = () => {
    return (
        <div className=" text-white ">
            <div className="absolute top-0 left-0 w-full h-full"><Background></Background></div>
            <div className="relative container mx-auto">
                <NavBar ></NavBar>
                <div className="container mx-auto min-h-screen">
                    < Outlet ></Outlet >
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>

        </div >
    );
};

export default Root;