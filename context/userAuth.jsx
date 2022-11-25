import * as React from 'react';
import { createContext, useContext, useState } from 'react';

import {users} from '../data/data'

const UserAuthContext = createContext({});

export function useUserAuth() {
  return useContext(UserAuthContext);
}

export function UserAuthProvider({ children }) {

  const [rand,setRand] = useState(false);

  const crand = () =>{
    setRand(!rand)
  }

  const [user,setUser] = useState()

  const login = () => {
    setUser({...users[0]})
  }

  const logout = () => {
    setUser()
  }
  
  return (
    <UserAuthContext.Provider value={{user,login,logout,crand}}>{children}</UserAuthContext.Provider>
  );
}
