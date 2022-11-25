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

  return (
    <RideAuthContext.Provider value={{ getId }}>
      {children}
    </RideAuthContext.Provider>
  );
}
