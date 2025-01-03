import React from 'react'
import Categories from '../../components/layouts/Categories'
import Banner from '../../components/layouts/banner/Banner'
import DealSlider from '../../components/layouts/dealslider/DealSlider'

const Home = () => {
  return (
    <>
       <Categories/>   
       <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
          <Banner/>
          <DealSlider title="discounts for you"/>
          <DealSlider title="top brands,best price"/>
       </main>
    </>
  )
}

export default Home