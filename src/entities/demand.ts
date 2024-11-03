export type Demand = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  priority: 'normal' | 'high';
  finished?: boolean;
};

export type CreateDemand = Omit<Demand, 'id'>;
