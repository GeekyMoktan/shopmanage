import * as React from 'react';
import { useUserAuth } from '../context/userAuth';

function LogIn() {
  const { login, logout, user } = useUserAuth();
  return (
    <button
      onClick={login}
                 className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"

    >
      log in
    </button>
  );
}

export default LogIn;
