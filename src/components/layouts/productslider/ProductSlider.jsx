import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextBtn, PreviousBtn } from '../banner/Banner'
import { offerProducts } from '../../../utils/constants';
import { getRandomProducts } from '../../../utils/function';
const ProductSlider = () => {

  return (
     <section className="bg-white w-full shadow overflow-hidden  border-red-800">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-lg font-medium capitalize">{title}</h1>
        <Link className="bg-purple-700 text-sm font-medium text-white px-5 py-2.5 shadow-lg rounded-sm uppercase hover:bg-purple-500 transition-all">View all</Link>
      </div>
      <hr />

      <Slider  {...settings}>
        {getRandomProducts(offerProducts, 12).map((item, i) => (
          <Product {...item} key={i}/>
        ))}

      </Slider>
    </section>
  )
}

export default ProductSlider