import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gadgetsale from '../../../assets/images/banners/gadget.jpg';
import fashionsale1 from '../../../assets/images/banners/fashion1.jpg';
import fashionsale2 from '../../../assets/images/banners/fashion2.webp';
import iphone from '../../../assets/images/banners/iphone.webp';
import oppo from '../../../assets/images/banners/oppo.webp';
import kitchen from '../../../assets/images/banners/kitchen-sale.jpg';
import './Banner.css';

export const PreviousBtn = ({className, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIosIcon />
        </div>
    )
}

export const NextBtn = ({className, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIosIcon />
        </div>
    )
}





const Banner = () => {
    const settings = {
        autoplay: true,
        autoPlaySpeed: 2000,
        dots: false,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />
    }
    const banners = [gadgetsale, fashionsale1, fashionsale2, iphone, oppo, kitchen];

    return (
        <div>
            <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
                <Slider {...settings}>
                    {banners.map((el, i) => (
                        <img src={el} draggable="false" className="h-44 sm:h-72 w-full object-cover" alt={el} />
                    ))}
                </Slider>
            </section>
        </div>
    )
}

export default Banner