import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../assets/images/playStation.jpg'
import img2 from '../../../assets/images/spiderman.jpg'
import img3 from '../../../assets/images/leagueOfLegends.jpg'
import img4 from '../../../assets/images/car.jpg'
import img5 from '../../../assets/images/elderRing.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide image={img1} text={'Level Up Your Gaming Experience!'}></Slide></SwiperSlide>
                <SwiperSlide><Slide image={img2} text={'Your Gateway to Gaming Mastery'}></Slide></SwiperSlide>
                <SwiperSlide><Slide image={img3} text={'Unlock Your Gaming Potential Today'}></Slide></SwiperSlide>
                <SwiperSlide><Slide image={img4} text={'Game Smarter, Play Harder'}></Slide></SwiperSlide>
                <SwiperSlide><Slide image={img5} text={'Powering Your Gaming Success'}></Slide></SwiperSlide>


            </Swiper>
        </>
    );
}
