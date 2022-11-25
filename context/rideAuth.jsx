import * as React from 'react';
import { createContext, useContext } from 'react';

import {users} from '../data/data'

const RideAuthContext = createContext({});

export function useRideAuth() {
  return useContext(RideAuthContext);
}

export function RideAuthProvider({ children }) {

  const handle=()=>{
    console.log(users[0])
  }

  return (
    <RideAuthContext.Provider value={{handle}}>{children}</RideAuthContext.Provider>
  );
}
