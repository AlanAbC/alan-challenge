import React from 'react';
import PropTypes from 'prop-types';
import callSignUp from './axios-request';

const { createContext } = React;

export const Context = createContext(null);

export const RegisterProvider = ({ children }) => {
  const value = {
    titulo: 'hola',
    signUp: callSignUp,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

RegisterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
