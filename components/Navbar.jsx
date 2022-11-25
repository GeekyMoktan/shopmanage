import * as React from 'react';
import { Fragment } from 'react';
import { useUserAuth } from '../context/userAuth';

function Navbar() {
  const { login, logout, user } = useUserAuth();
  return (
    <nav class="bg-white px-2 sm:px-4 py-2 dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="relative self-center text-sm font-medium whitespace-nowrap  hover:text-blue-800 ">
          TICKETMS
          {user !== undefined ? (
            <span
              class="absolute font-normal 
            left-0 top-3 
          hover:text-white py-0.6 px-0   text-xs rounded hover:text-blue-500 text-blue-600"
            >
              welcome moktan
            </span>
          ) : null}
        </span>

        

        {/* {JSON.stringify(user)} */}

        <div class="flex md:order-2">
          {user === undefined ? (
            <Fragment>
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 mr-1 border border-blue-500 text-xs hover:border-transparent rounded">
                sign up
              </button>
              <button
                onClick={login}
                class="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              >
                Log in
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <span class="font-normal hover:text-white py-1 px-2 mr-1 border border-blue-500 text-xs rounded hover:text-blue-500">
              
              </span>
              <button
                onClick={logout}
                class="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              >
                Log out
              </button>
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
