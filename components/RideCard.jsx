import * as React from 'react';

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

function CartButton({ quantity }) {
  return (
    <React.Fragment>
    <button class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center mr-1">
      +
    </button>
    <button class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center">
      {quantity}
    </button>
    <button class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center ml-1">
      -
    </button>
    </React.Fragment>
  );
}

function RideCard({ id, name, price, img }) {
  const { user } = useUserAuth();
  const { getId } = useRideAuth();

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
          <AddToCart />
        ) : (
          <CartButton quantity={quantity} />
        )}
      </div>
    </div>
  );
}

export default RideCard;
