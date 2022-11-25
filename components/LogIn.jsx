import * as React from 'react';
import { useUserAuth } from '../context/userAuth';

function LogIn(){

    const { login, logout, user } = useUserAuth();


}

export default  LogIn;