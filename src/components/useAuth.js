import { useContext } from 'react';
import { Context } from './ContextData';

const useAuth = () => {
  return useContext(Context);
};

export default useAuth;
