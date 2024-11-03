import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CreateDemand, Demand } from '../entities/demand';
import { storage, StorageKeys } from '../utils/storage';
import { generateId } from '../utils/custom-id';

type DemandsContextProps = {
  demands: Demand[];
  createDemand: (demand: CreateDemand) => void;
  deleteDemand: (id: string) => void;
  finishDemand: (id: string) => void;
  editDemand: (demand: Demand) => void;
};

export const DemandsContext = createContext<DemandsContextProps>(
  {} as DemandsContextProps,
);

type DemandsProviderProps = {
  children: ReactNode;
};

const DemandsProvider: React.FC<DemandsProviderProps> = ({ children }) => {
  const [demands, setDemands] = useState<Demand[]>([]);

  useEffect(() => {
    const demandsStorage = storage.getItem<Demand[]>(StorageKeys.demands);
    if (demandsStorage) {
      setDemands(demandsStorage);
    }
  }, []);

  useEffect(() => {
    storage.setItem(StorageKeys.demands, demands);
  }, [demands]);

  const createDemand = useCallback(
    (demandCreate: CreateDemand) => {
      const id = generateId();
      const demand = { id, ...demandCreate };
      setDemands(prevState => [...prevState, demand]);
    },
    [setDemands],
  );

  const deleteDemand = useCallback(
    (id: string) => {
      const temp = demands.filter(demand => demand.id !== id);
      setDemands(temp);
    },
    [demands, setDemands],
  );

  const finishDemand = useCallback(
    (id: string) => {
      const indexDemand = demands.findIndex(item => item.id === id);
      const demandFinished = { ...demands[indexDemand], finished: true };
      const newDemands = [...demands];
      newDemands.splice(indexDemand, 1, demandFinished);
      setDemands(newDemands);
    },
    [demands, setDemands],
  );

  const editDemand = useCallback(
    (demand: Demand) => {
      const indexDemand = demands.findIndex(item => item.id === demand.id);
      const editDemands = [...demands];
      editDemands.splice(indexDemand, 1, demand);
      setDemands(editDemands);
    },
    [demands],
  );

  const values = useMemo(
    () => ({
      demands,
      createDemand,
      deleteDemand,
      finishDemand,
      editDemand,
    }),
    [demands, createDemand, deleteDemand, finishDemand, editDemand],
  );

  return (
    <DemandsContext.Provider value={values}>{children}</DemandsContext.Provider>
  );
};

export default DemandsProvider;
