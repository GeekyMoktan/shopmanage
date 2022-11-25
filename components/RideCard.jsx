import * as React from 'react';

import { useState } from 'react';

//context
import { useRideAuth } from '../context/rideAuth';
import { useUserAuth } from '../context/userAuth';

function AddToCart() {
  return (
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2 text-center">
      <span class="mr-2">
        <i class="fa-solid fa-cart-plus"></i>
      </span>
      Add to cart
    </button>
  );
}

function AddToStore({ id, user, quantity, ch, add }) {
  return (
    <button
      onClick={() => {
        add(id, user);
        ch();
        console.log(user.stores[0].quantity);
      }}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2 text-center"
    >
      <span class="mr-2">
        <i class="fa-solid fa-cart-plus"></i>
      </span>
      Add to store
    </button>
  );
}

function CartButton({ quantity, add, id, user, ch, decre }) {
  return (
    <React.Fragment>
      <button
        onClick={() => {
          add(id, user);
          ch();
          console.log(user.stores[0].quantity);
        }}
        class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center mr-1"
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      <button class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center">
        {quantity}
      </button>
      <button
        onClick={() => {
          decre(id, user);
          ch();
          console.log(user.stores[0].quantity);
        }}
        class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center ml-1"
      >
        <i class="fa-solid fa-minus"></i>
      </button>
    </React.Fragment>
  );
}

function RideCard({ id, name, price, img }) {
  const { user } = useUserAuth();
  const { getId, addItem, decreItem } = useRideAuth();
  const [no, setNo] = useState(1);

  const changeNo = () => {
    //this function to rerender component
    setNo(Math.floor(Math.random() * 11));
  };
  let quantity;
  if (user !== undefined) {
    quantity = getId(id, user);
  }

  return (
    <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img
        class="h-40 object-cover rounded-xl h-40 object-cover rounded-xl"
        src={img}
        alt=""
      />
      <div class="p-2">
        <h5 class="text-xl text-center font-bold tracking-tight text-gray-900 mb-2 ">
          {name.toLowerCase()}
        </h5>

        <h2 class="text-2xl text-center font-medium text-gray-600  mb-2">
          Rs{price}
        </h2>
      </div>

      <div class="mb-2 text-center">
        {user === undefined ? (
          <AddToCart />
        ) : quantity === undefined ? (
          <AddToStore
            id={id}
            user={user}
            quantity={quantity}
            add={addItem}
            ch={changeNo}
          />
        ) : (
          <CartButton
            id={id}
            user={user}
            quantity={quantity}
            add={addItem}
            ch={changeNo}
            decre={decreItem}
          />
        )}
      </div>
    </div>
  );
}

export default RideCard;
