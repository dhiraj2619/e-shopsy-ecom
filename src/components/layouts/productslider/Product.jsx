import React from 'react'
import { Link } from 'react-router-dom'
import { getDiscount } from '../../../utils/function';

const Product = (props) => {
  const{_id,name,images,price,cuttedPrice} = props;
  return (
    <div className="flex flex-col gap-2 px-2 py-6 relative">
      <Link className="flex flex-col items-center text-center group" to={`/products/${_id}`}>
        <div className="h-36 w-36">
          <img draggable="false" src={images[0].url} className="h-full w-full object-contain" alt={name} />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-purple-600">{name}</h2>
      </Link>
      <div className="flex flex-col gap-2 items-center">


        {/* <!-- price container --> */}
        <div className="flex flex-col items-center gap-1.5 text-md font-medium">
          <span>₹{price.toLocaleString()}</span>
          <span className="text-gray-500 line-through text-xs">₹{cuttedPrice.toLocaleString()}</span>
          <span className="text-xs text-primary-green">{getDiscount(price,cuttedPrice)}%&nbsp; off</span>
        </div>
        {/* <!-- price container --> */}
      </div>
      {/* <!-- product description --> */}


    </div>
  )
}

export default Product