import React from "react";
import Slider from "react-slick";
import { NextBtn, PreviousBtn } from "../banner/Banner";
import { useSelector } from "react-redux";

const Productdetails = () => {

    const {product,loading,error} = useSelector(state=>state.productDetails)

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <main className="mt-12 sm:mt-0">
      <div className="w-full flex flex-col sm:flex-row bg-white sm:p-2 relative">
        {/* <!-- image wrapper --> */}
        <div className="w-full sm:w-2/5 sm:sticky top-16 sm:h-screen">
          {/* <!-- imgbox --> */}
          <div className="flex flex-col gap-3 m-3">
            <div className="w-full h-full pb-6 border relative">
              <Slider {...settings}>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      draggable="false"
                      className="w-full h-96 object-contain"
                      src={item.url}
                      alt={product.name}
                      key={i}
                    />
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productdetails;
