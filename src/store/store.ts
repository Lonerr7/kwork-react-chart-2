import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ConverterState, SelectOption, SelectValues } from '../types/types';
import rubIcon from '../images/RUB 1.svg';
import { api } from '../api/api';
import { transformResponseData } from '../utils/transformResponseData';
import axios from 'axios';
import { checkIfDataIsOutdated } from '../utils/checkIfDataIsOutdated';

export const useConverter = create<ConverterState>()(
  persist(
    (set, get) => ({
      currentData: null,
      dataToRUB: null,
      dataToBYN: null,
      selectedOption: {
        value: SelectValues.RUB,
        img: rubIcon,
        label: SelectValues.RUB,
      },
      isInitialized: false,
      isDataOutdated: false,
      errMessage: null,
      handleSelectChange: (newValue: SelectOption) => {
        set({
          selectedOption: newValue,
        });
      },

      fetchDataByCurrency: async (currency: 'byn' | 'rub') => {
        // Проверка на наличие кэша - если есть, то сетаем его в актуальные данные, а запрос на сервер не делаем
        // @ts-ignore
        if (get()[`dataTo${currency.toUpperCase()}`]) {
          set({
            // @ts-ignore
            currentData: get()[`dataTo${currency.toUpperCase()}`],
          });

          return;
        }

        try {
          const data = await api.getDataByCurrency(currency);

          // Проверка на сбой в работе парсера: если он не впишет новые данные за новый день, ставим флаг isOutdated: true, чтобы потом в функции transformResponseData добавить объекты с нулевыми значениями для вывода их на график
          if (checkIfDataIsOutdated(data)) {
            set({ isDataOutdated: true });
          }

          // Сетаем данные в стейт
          const currentCurrencyUpper = currency.toUpperCase();
          const transformedDataArray = transformResponseData(
            currency,
            data.data,
            get().isDataOutdated
          );

          set({
            currentData: transformedDataArray,
            [`dataTo${currentCurrencyUpper}`]: transformedDataArray,
          });

          // Инициализируем приложения для корректного отображения данных
          if (!get().isInitialized) {
            set({ isInitialized: true });
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            set({ errMessage: error.message });
          } else {
            set({ errMessage: `Something went wrong!` });
            console.error(error);
          }
        }
      },
    }),
    {
      name: 'data',
      partialize: (state) => ({ selectedOption: state.selectedOption }),
    }
  )
);
