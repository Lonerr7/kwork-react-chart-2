import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ConverterState, SelectOption, SelectValues } from '../types/types';
import rubIcon from '../images/RUB 1.svg';
import { api } from '../api/api';
import { transformResponseData } from '../utils/transformResponseData';
import axios from 'axios';

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

          if (currency === 'rub') {
            const transformedDataArray = transformResponseData(
              'rub',
              data.data
            );

            set({
              currentData: transformedDataArray,
              dataToRUB: transformedDataArray,
            });
          } else {
            const transformedDataArray = transformResponseData(
              'byn',
              data.data
            );

            set({
              currentData: transformedDataArray,
              dataToBYN: transformedDataArray,
            });
          }

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
