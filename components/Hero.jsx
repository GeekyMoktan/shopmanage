import * as React from 'react';

function Section() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="pb-12 pt-20 px-4 mx-auto max-w-screen-md sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-1 text-center lg:mb-10 ">
          <h2 class="mb-4 text-center text-4xl tracking-tight font-extrabold text-gray-900 ">
            Book Tickets Fast and Easy Way
          </h2>
          <p class="text-gray-500 text-center mb-3 sm:text-xl">
            Here at BOOKING 101 you can buy tickets quickly than ever before
          </p>

          <button
            class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 mr-1 border border-blue-500 
      text-xs hover:border-transparent rounded"
          >
           <a href="#rides">Browse</a> 
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section;
