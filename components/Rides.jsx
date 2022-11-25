import * as React from 'react';
import RideCard from './RideCard';

//data
import {rides} from '../data/data';

//context
import {useRideAuth} from '../context/rideAuth';

function Rides() {

  

  return (
    <div id='rides' class=" pt-10 sm:pt-5 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">

      {
        rides.map((item,index)=>{
          return (
            <RideCard id={item.id} name={item.name} price={item.price} img={item.image} key={index} />
          )
        })
      }
      
     
    </div>
  );
}

export default Rides;
