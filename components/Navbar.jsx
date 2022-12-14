import * as React from 'react';
import { Fragment, useState, useRef } from 'react';
import { useUserAuth } from '../context/userAuth';

import ShopCart from './ShopCart';
import SignUp from './SignUp';

function ShopIcon() {
  const [on, setOn] = useState(false);
  let { user } = useUserAuth();

  function allQuant() {
    let { stores } = user;
    // arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
    return stores.reduce(function (acc, obj) {
      return acc + obj.quantity;
    }, 0);
  }
  const changeOn = () => {
    setOn(!on);
  };

  return (
    <Fragment>
      <span
        onClick={() => {
          changeOn();
        }}
        class="font-normal hover:text-white py-1 px-2 mr-2 border border-blue-500 text-xs rounded hover:text-blue-500 relative "
      >
        <i class="fa-solid fa-cart-shopping"></i>
        <span
          className="bg-white border border-black px-1 text-xs rounded-full hover:text-blue-500
          absolute top-3 left-4"
        >
          {allQuant()}
        </span>
      </span>

      {on === true ? <ShopCart change={changeOn} /> : null}
    </Fragment>
  );
}

function Signing() {
  const [on, setOn] = useState(false);

  const overlayRef = useRef(null);

  const handleClose = (e) => {
    //e.preventDefault();

    if (e.target === overlayRef.current) {
      setOn(false);
    }
  };

  const changeOn = () => {
    setOn(!on);
  };
  return (
    <Fragment>
      <button
        onClick={changeOn}
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 mr-1 border border-blue-500 text-xs hover:border-transparent rounded"
      >
        sign in
      </button>
      {on === true ? (
        <SignUp c={changeOn} h={handleClose} o={overlayRef} />
      ) : null}
    </Fragment>
  );
}

function Navbar() {
  const { login, logout, user } = useUserAuth();
  return (
    <nav class="bg-white px-2 sm:px-4 py-2 dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="relative self-center text-sm font-medium whitespace-nowrap  hover:text-blue-800 ">
          BOOKING 101
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

        <div class="flex md:order-2 ">
          {user === undefined ? (
            <Fragment>
              <Signing />
              <button
                onClick={login}
                class="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              >
                Log in
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <ShopIcon />
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
