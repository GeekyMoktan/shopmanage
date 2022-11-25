import * as React from 'react';

function RideCard({id,name,price,img}){
  return (
    <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  
    <img class="h-40 object-cover rounded-xl h-40 object-cover rounded-xl" src={img} alt="" />
    <div class="p-2">
    
    
    <h5 class="text-xl text-center font-bold tracking-tight text-gray-900 mb-2 ">
    {name.toLowerCase()}</h5>

    <h2 class='text-2xl text-center font-medium text-gray-600  mb-2'>Rs{price}</h2>
   
    </div>
 
    <div class="mb-2 text-center">
    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2 text-center">Add to cart</a>
    </div>
  </div>
  )
}

export default RideCard;