import React, { useState } from 'react';
import './App.css';
const ExampleUseState = () => {
  const [password, setPassword] = useState('password');

  const typeHandler = () => {
    setPassword('text');
  };
  return (
    <form className='form-container'>
      <input type={password} placeholder='Ingrese un password' />
      <button type='button' onClick={typeHandler}>
        Mostrar Password
      </button>
    </form>
  );
};

export default ExampleUseState;
