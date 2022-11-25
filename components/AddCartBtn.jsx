import * as React from 'react';
import { useState, useRef } from 'react';
import SignUp from './SignUp';

function AddCartBtn() {
  const [on, setOn] = useState(false);

  const changeOn = () => {
    setOn(!on);
  };

  const handleClose = (e) => {
    //e.preventDefault();

    if (e.target === overlayRef.current) {
      setOn(false);
    }
  };

  const overlayRef = useRef(null);

  return (
    <button
      onClick={changeOn}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2 text-center"
    >
      <span class="mr-2">
        <i class="fa-solid fa-cart-plus"></i>
      </span>
      Add to cart
      {on === true ? (
        <SignUp c={changeOn} o={overlayRef} h={handleClose} />
      ) : null}
    </button>
  );
}

export default AddCartBtn;
