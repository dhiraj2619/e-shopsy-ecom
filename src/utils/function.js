const getDiscount=(price,cuttedPrice)=>{
   return ((cuttedPrice-price)/cuttedPrice * 100).toFixed();
}


const getRandomProducts=(prodsArray,n)=>{
  return prodsArray.sort(()=> 0.5 - Math.random()).slice(0,n)
}

export  {getDiscount,getRandomProducts}