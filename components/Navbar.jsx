import * as React from 'react';

function Navbar() {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2 dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="self-center text-sm font-medium whitespace-nowrap  dark:text-white hover:text-blue-800 ">
          TICKETMS
        </span>

        <div class="flex md:order-2">
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 mr-1 border border-blue-500 
      text-xs hover:border-transparent rounded"
          >
            sign up
          </button>
          <button class="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
