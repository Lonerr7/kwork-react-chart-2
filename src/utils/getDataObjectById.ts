import { ChartDataObject, DataOrigins } from '../types/types';

export const getDataObjectById = (data: ChartDataObject[], id: DataOrigins) =>
  data?.find((obj) => obj.id === id);
