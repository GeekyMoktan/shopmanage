import * as React from 'react';
import { createContext, useContext } from 'react';

import { users } from '../data/data';

import { useUserAuth } from './userAuth';

const RideAuthContext = createContext({});

export function useRideAuth() {
  return useContext(RideAuthContext);
}

export function RideAuthProvider({ children }) {
  const { user } = useUserAuth();

  const getId = (id, user) => {
    let { stores } = user;

    let storeItem =
      stores.find((item) => item.id === id)?.quantity || undefined;

    return storeItem;
  };

  function addItem(id,user){
    console.log('incre')
    const {stores} = user;
    if(stores.find(item=>item.id == id)=== undefined){
    stores.push({id :id,quantity : 1})
    

    }else{
      let x = stores.find((item)=>item.id == id);
      x.quantity = x.quantity + 1
      
    }
  }

  function decreItem(id,user){
    console.log('decre')
    const {stores} = user;
    if(stores.find(item=>item.id == id)=== undefined){
      return 
    }else{
      let x = stores.find((item)=>item.id == id);
      x.quantity = x.quantity - 1
      
    }
  }

  return (
    <RideAuthContext.Provider value={{ getId, addItem,decreItem }}>
      {children}
    </RideAuthContext.Provider>
  );
}
