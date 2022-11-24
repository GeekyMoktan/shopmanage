import * as React from 'react';
import { createContext, useContext } from 'react';

const UserAuthContext = createContext({});

export function useUserAuth() {
  return useContext(createUserAuth);
}

export function UserAuthProvider({ children }) {
  return (
    <UserAuthContext.Provider value={{}}>{children}</UserAuthContext.Provider>
  );
}
