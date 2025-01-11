import React from 'react'
import mobiles from '../../assets/images/categories/mobiles.webp'
import fashion from '../../assets/images/categories/fashion.png'
import electronics from '../../assets/images/categories/electronics.png'
import bags from '../../assets/images/categories/bag.webp'
import appliances from '../../assets/images/categories/appliances.jpg'
import grocery from '../../assets/images/categories/grocery.png'
import perfumes from '../../assets/images/categories/perfumes.png'
import stationary from '../../assets/images/categories/stationary.png'
import { Link } from 'react-router-dom'

const Categories = () => {

  const catNav = [
     {
        name:"Mobiles",
        icon:mobiles
     },
     {
        name:"Fashion",
        icon:fashion
     },
     {
        name:"Electronics",
        icon:electronics
     },
     {
        name:"Bags",
        icon:bags
     },
     {
        name:"Appliances",
        icon:appliances
     },
     {
        name:"Grocery",
        icon:grocery
     },
     {
        name:"Perfumes",
        icon:perfumes
     },
     {
        name:"Stationary",
        icon:stationary
     },
  ]
  return (
    <section className="hidden sm:block bg-white mt-3 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
          <div className="flex items-center justify-between mt-2">
               {catNav.map((item,i)=>(
                   <Link to="" className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                              <img src={item.icon} draggable="false" className="h-full w-full object-contain" alt={item.icon} />
                        </div>
                        <span className="text-gray-800 font-medium text-sm pt-3">{item.name}</span>
                   </Link>
               ))}
          </div>
    </section>
  )
}

export default Categories