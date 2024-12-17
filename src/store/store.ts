import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ConverterState, SelectOption, SelectValues } from '../types/types';
import rubIcon from '../images/RUB 1.svg';
import { api } from '../api/api';
import { transformResponseData } from '../utils/transformResponseData';

export const useConverter = create<ConverterState>()(
  persist(
    (set, get) => ({
      currentData: null,
      selectedOption: {
        value: SelectValues.RUB,
        img: rubIcon,
        label: SelectValues.RUB,
      },
      isFetching: false,
      isInitialized: false,
      handleSelectChange: (newValue: SelectOption) => {
        set({
          selectedOption: newValue,
        });
      },

      fetchDataByCurrency: async (currency: 'byn' | 'rub') => {
        set({ isFetching: true });

        try {
          const data = await api.getDataByCurrency(currency);

          if (currency === 'rub') {
            const transformedDataArray = transformResponseData(
              'rub',
              data.data
            );

            set({
              currentData: transformedDataArray,
              // dataToRUB: transformedDataArray,
            });

            // Инициализируем приложения для корректного отображения данных
            if (!get().isInitialized) {
              set({ isInitialized: true });
            }
          } else {
            const transformedDataArray = transformResponseData(
              'byn',
              data.data
            );

            set({
              currentData: transformedDataArray,
              // dataToBYN: transformedDataArray,
            });

            // Инициализируем приложения для корректного отображения данных
            if (!get().isInitialized) {
              set({ isInitialized: true });
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          set({ isFetching: false });
        }
      },
    }),
    {
      name: 'data',
      partialize: (state) => ({ selectedOption: state.selectedOption }),
    }
  )
);
