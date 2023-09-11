import React from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {

  const authData = useSelector(({authSlice}) => authSlice)
  const { token, isAuth, email } = authData;


    return(
        <>
          <h1>Hola mundo desde home screen</h1>
          {isAuth && <p>isAuth: autorizado</p>}
          {token && <p>token: { token }</p>}
          {email && <p>email: { email }</p>}
        </>
    )
}

export default HomeScreen;