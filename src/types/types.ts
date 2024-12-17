export interface SelectOption {
  value: SelectValues;
  label: SelectValues;
  img: string;
}

export enum SelectValues {
  BYN = 'BYN',
  RUB = 'RUB',
}

export interface ChartDataObject {
  id: string;
  color?: string;
  data: {
    x: string;
    y: number;
  }[];
}

export interface ConverterState {
  currentData: ChartDataObject[] | null;
  dataToRUB: ChartDataObject[] | null;
  dataToBYN: ChartDataObject[] | null;
  selectedOption: SelectOption;
  handleSelectChange: any;
  isFetching: boolean;
  isInitialized: boolean;
  fetchDataByCurrency: (currency: 'byn' | 'rub') => Promise<any>;
}

export enum DataOrigins {
  ALIEXPRESS = 'AliExpress',
  CBRF = 'ЦБ РФ',
  NBRB = 'НБ РБ',
}
