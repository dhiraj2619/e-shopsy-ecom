import React, { useEffect } from 'react'
import Categories from '../../components/layouts/Categories'
import Banner from '../../components/layouts/banner/Banner'
import DealSlider from '../../components/layouts/dealslider/DealSlider'
import ProductSlider from '../../components/layouts/productslider/ProductSlider'
import {useDispatch, useSelector} from 'react-redux';
import { clearError, getSliderProducts,  } from '../../actions/ProductAction'
import {useSnackbar} from 'notistack';

const Home = () => {
  const dispatch = useDispatch();

  const {enqueueSnackbar} = useSnackbar();

  const {error,loading} = useSelector((state)=>state.products);
  
  useEffect(()=>{
       if(error){
           enqueueSnackbar(error,{variant:'error'});
           dispatch(clearError());
       }
      dispatch(getSliderProducts());
  },[dispatch,error,enqueueSnackbar]);

  return (
    <>
       <Categories/>   
       <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
          <Banner/>
          <DealSlider title={"discounts for you"}/>
          {!loading && <ProductSlider title={"suggested for you"} tagline={"based on your daily activity"}/>}
       </main>
    </>
  )
}

export default Home