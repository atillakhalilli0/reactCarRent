import React, { useState } from 'react'
import Cards from './Cards'
import dataArr from './Data'

function Main({ search }) {
  const [cars, setCars] = useState(dataArr);
  function handleDelete(id){
    setCars(cars.filter(item => item.id !== id));
  }

  return (
    <div className='w-[70%] mx-auto flex flex-col justify-center items-center'>
        <span className='text-[#234896] text-2xl font-bold my-3'>Get the Best Offers</span>
        <h2 className='capitalize text-5xl font-black'>
          our <span className='text-[#234896]'>featured</span> cars
        </h2>
        <Cards data={cars} search={search} handleDelete={handleDelete} />
    </div>
  )
}

export default Main;
