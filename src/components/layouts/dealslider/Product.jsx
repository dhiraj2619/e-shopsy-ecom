import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({image,name,offer,tag}) => {
    return (
        <div>
            <Link className="flex items-center flex-col  cursor-pointer gap-1.5 p-6">
                <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-150 ease-out">
                    <img src={image} className="h-full w-full object-contain" alt="" />
                </div>
                <h2 className="font-medium text-sm mt-2">{name}</h2>
                <span className="text-green-700 text-sm">{offer}</span>
                <span className="text-gray-500 text-sm block">{tag}</span>
            </Link>

        </div>
    )
}

export default Product