/* eslint-disable react/prop-types */


const Slide = ({ image, text }) => {


    return (
        <header>
            <div className="w-full bg-center bg-cover h-[25rem] md:h-[38rem] opacity-85 rounded-full" style={{ backgroundImage: `url(${image})` }}>
                <div className="flex items-center justify-center w-full h-full rounded-full bg-stone-900/40">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-white lg:text-4xl">{text}</h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Slide;
