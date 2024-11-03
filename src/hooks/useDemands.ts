import { useContext } from 'react';
import { DemandsContext } from '../context/demands';

export const useDemands = () => {
  return useContext(DemandsContext);
};
