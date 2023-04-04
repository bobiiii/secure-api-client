import React, { createContext, useState } from 'react';

export const Context = createContext();

function ContextData({ children }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [auth, setAuth] = useState(false);

  return (
    <Context.Provider value={{ auth, setAuth, error, setError, phone, setPhone, password, setPassword }}>
      {children}
    </Context.Provider>
  );
}

export default ContextData;
