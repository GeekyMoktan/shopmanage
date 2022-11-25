import * as React from 'react';

import { rides } from '../data/data';

function getItem(id) {
  return rides.find((item) => item.id === id);
}

function ShopItem({ id, q }) {
  console.log('from shopitem', id, q);
  let item = getItem(id);
  if (item === undefined) {
    return null;
  }
  let { image, price, name } = item;
  return (
    <li class="pb-3 pt-2 sm:pb-4">
      <div class="flex flex-wrap items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded" src={image} alt="Neil image" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-xs font-medium text-gray-900 dark:text-white">
            {name}
          </p>
          <p class="truncate text-base text-xs font-bold text-gray-800 dark:text-gray-800">
            {price}
          </p>
        </div>
        <div class="inline-flex  sm:flex-wrap items-center text-base font-semibold text-gray-900 dark:text-white">
          <button class="mr-1 rounded-lg bg-blue-400 px-2 py-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <i class="fa-solid fa-plus"></i>
          </button>
          <button class="mr-1 rounded-lg bg-blue-400 px-2 py-1 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            {q}
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
