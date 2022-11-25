import * as React from 'react';

import ShopItem from './ShopItem'

import { useUserAuth } from '../context/userAuth';


function ShopCart({change}) {
  const { user } = useUserAuth();
  
  {'HELLO'}
  JSON.stringify(user.stores)
  
  return (
    <div>
  <div id="popup-modal" tabindex="-1" class="show h-modal fixed top-0 right-0 left-0 z-50 overflow-y-auto overflow-x-hidden p-2 md:inset-0 md:h-full">
    <div class="relative m-auto h-full w-full max-w-md md:h-auto">
      <div class="relative h-screen rounded-lg bg-white pt-8 shadow dark:bg-gray-700">
        <button onClick={change} type="button" class="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-6 text-center">
          <div className='mb-5' >
          <h2 class="truncate text-base text-xs font-bold text-gray-800 dark:text-gray-800">
            Your Tickets from TicketMS
          </h2>
          </div>
          <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            
            {
              
              user.stores.map((item,index)=>{
                console.log('from shopcart',item.id, item.quantity);
                <ShopItem id={item.id} q={item.quantity} />
              })
            }

{/* <ShopItem id={1} q={5} /> */}
            
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default ShopCart;
