import * as React from 'react';

import {rides} from '../data/data';

function ShopItem() {
  return (
    <li class="pb-3 pt-2 sm:pb-4">
      <div class="flex flex-wrap items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded"
            src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Neil image"
          />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-xs font-medium text-gray-900 dark:text-white">
            Neil Sims
          </p>
          <p class="truncate text-base text-xs font-bold text-gray-800 dark:text-gray-800">
            Rs320
          </p>
        </div>
        <div class="inline-flex  sm:flex-wrap items-center text-base font-semibold text-gray-900 dark:text-white">
          <button class="mr-1 rounded-lg bg-blue-400 px-2 py-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <i class="fa-solid fa-plus"></i>
          </button>
          <button class="mr-1 rounded-lg bg-blue-400 px-2 py-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            3
          </button>
          <button class=" rounded-lg bg-blue-400 px-2 py-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
