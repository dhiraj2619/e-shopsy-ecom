import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../dealslider/DealSlider';
import Product from './Product';
import { useSelector } from 'react-redux';
import { getRandomProducts } from '../../../utils/function';
const ProductSlider = ({ title, tagline }) => {

  const { loading, products } = useSelector((state) => state.products);

  return (
    <section className="bg-white w-full shadow overflow-hidden">
      <div className="flex px-6 py-4 justify-between items-center">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-sm text-gray-400">{tagline}</p>
        </div>
        <Link className="bg-purple-700 text-sm font-medium text-white px-5 py-2.5 shadow-lg rounded-sm uppercase hover:bg-purple-500 transition-all">View all</Link>
      </div>
      <hr />
      {loading ? null :

        <Slider {...settings} className="flex items-center justify-between p-1">
          {products && getRandomProducts(products,12).map((product)=>(
            <Product {...product} key={product._id}/>
          ))}
        </Slider>
      }


    </section>
  )
}

export default ProductSlider