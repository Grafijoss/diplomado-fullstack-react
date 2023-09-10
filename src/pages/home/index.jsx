import React from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {

  const authData = useSelector(({authSlice}) => authSlice)
  const { token } = authData;


    return(
        <>
          Hola mundo desde home screen {token}
        </>
    )
}

export default HomeScreen;