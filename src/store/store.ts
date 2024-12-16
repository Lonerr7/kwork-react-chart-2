import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ConverterState, SelectOption, SelectValues } from '../types/types';
import rubIcon from '../images/RUB 1.svg';
import { api } from '../api/api';

export const useConverter = create<ConverterState>()(
  persist(
    (set) => ({
      currentData: null,
      dataToRUB: [
        {
          id: 'AliExpress',
          color: '#E5352F',
          data: [
            {
              x: new Date(2024, 6, 20),
              y: 104.05,
            },
            {
              x: new Date(2024, 6, 23),
              y: 92.19,
            },
            {
              x: new Date(2024, 6, 24),
              y: 92.2,
            },
            {
              x: new Date(2024, 6, 25),
              y: 91.31,
            },
            {
              x: new Date(2024, 6, 26),
              y: 90.64,
            },
            {
              x: new Date(2024, 6, 27),
              y: 90.4,
            },
            {
              x: new Date(2024, 6, 30),
              y: 91.1,
            },
            {
              x: new Date(2024, 6, 31),
              y: 91.1,
            },
            {
              x: new Date(2024, 7, 1),
              y: 91.15,
            },
            {
              x: new Date(2024, 7, 2),
              y: 92.15,
            },
            {
              x: new Date(2024, 7, 3),
              y: 93.49,
            },
            {
              x: new Date(2024, 7, 6),
              y: 92.74,
            },
            {
              x: new Date(2024, 7, 7),
              y: 93.16,
            },
            {
              x: new Date(2024, 7, 8),
              y: 95.49,
            },
            {
              x: new Date(2024, 7, 9),
              y: 93.9,
            },
            {
              x: new Date(2024, 7, 10),
              y: 96.34,
            },
            {
              x: new Date(2024, 7, 13),
              y: 95.93,
            },
            {
              x: new Date(2024, 7, 14),
              y: 95.64,
            },
            {
              x: new Date(2024, 7, 15),
              y: 94.62,
            },
            {
              x: new Date(2024, 7, 16),
              y: 94.54,
            },
            {
              x: new Date(2024, 7, 17),
              y: 94.03,
            },
            {
              x: new Date(2024, 7, 20),
              y: 96.58,
            },
            {
              x: new Date(2024, 7, 21),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 22),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 23),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 24),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 25),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 26),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 27),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 28),
              y: 90.69,
            },
          ],
        },
        {
          id: 'ЦБ РФ',
          color: '#F3973E',
          data: [
            {
              x: new Date(2024, 6, 20),
              y: 92.61,
            },
            {
              x: new Date(2024, 6, 23),
              y: 91.45,
            },
            {
              x: new Date(2024, 6, 24),
              y: 91.44,
            },
            {
              x: new Date(2024, 6, 25),
              y: 91.48,
            },
            {
              x: new Date(2024, 6, 26),
              y: 91.77,
            },
            {
              x: new Date(2024, 6, 27),
              y: 91.6,
            },
            {
              x: new Date(2024, 6, 30),
              y: 91.6,
            },
            {
              x: new Date(2024, 6, 31),
              y: 91.6,
            },
            {
              x: new Date(2024, 7, 1),
              y: 91.29,
            },
            {
              x: new Date(2024, 7, 2),
              y: 91.69,
            },
            {
              x: new Date(2024, 7, 3),
              y: 90.69,
            },
            {
              x: new Date(2024, 7, 6),
              y: 89.54,
            },
            {
              x: new Date(2024, 7, 7),
              y: 91.19,
            },
            {
              x: new Date(2024, 7, 8),
              y: 86.11,
            },
            {
              x: new Date(2024, 7, 9),
              y: 85.75,
            },
            {
              x: new Date(2024, 7, 10),
              y: 90.19,
            },
            {
              x: new Date(2024, 7, 13),
              y: 91.78,
            },
            {
              x: new Date(2024, 7, 14),
              y: 92.37,
            },
            {
              x: new Date(2024, 7, 15),
              y: 90.84,
            },
            {
              x: new Date(2024, 7, 16),
              y: 89.67,
            },
            {
              x: new Date(2024, 7, 17),
              y: 89.69,
            },
            {
              x: new Date(2024, 7, 20),
              y: 88.58,
            },
            {
              x: new Date(2024, 7, 21),
              y: 89.02,
            },
            {
              x: new Date(2024, 7, 22),
              y: 89.02,
            },
            {
              x: new Date(2024, 7, 23),
              y: 89.02,
            },
            {
              x: new Date(2024, 7, 24),
              y: 89.02,
            },
            {
              x: new Date(2024, 7, 25),
              y: 89.02,
            },
            {
              x: new Date(2024, 7, 26),
              y: 89.02,
            },
            {
              x: new Date(2024, 7, 27),
              y: 89.02,
            },
            {
              x: new Date(2024, 7, 28),
              y: 89.02,
            },
          ],
        },
      ],
      dataToBYN: [
        {
          id: 'AliExpress',
          color: '#E5352F',
          data: [
            {
              x: new Date(2024, 6, 20),
              y: 3.32,
            },
            {
              x: new Date(2024, 6, 23),
              y: 3.33,
            },
            {
              x: new Date(2024, 6, 24),
              y: 3.33,
            },
            {
              x: new Date(2024, 6, 25),
              y: 3.35,
            },
            {
              x: new Date(2024, 6, 26),
              y: 3.36,
            },
            {
              x: new Date(2024, 6, 27),
              y: 3.35,
            },
            {
              x: new Date(2024, 6, 30),
              y: 3.34,
            },
            {
              x: new Date(2024, 6, 31),
              y: 3.34,
            },
            {
              x: new Date(2024, 7, 1),
              y: 3.34,
            },
            {
              x: new Date(2024, 7, 2),
              y: 3.34,
            },
            {
              x: new Date(2024, 7, 3),
              y: 3.33,
            },
            {
              x: new Date(2024, 7, 6),
              y: 3.32,
            },
            {
              x: new Date(2024, 7, 7),
              y: 3.31,
            },
            {
              x: new Date(2024, 7, 8),
              y: 3.3,
            },
            {
              x: new Date(2024, 7, 9),
              y: 3.3,
            },
            {
              x: new Date(2024, 7, 10),
              y: 3.3,
            },
            {
              x: new Date(2024, 7, 13),
              y: 3.3,
            },
            {
              x: new Date(2024, 7, 14),
              y: 3.36,
            },
            {
              x: new Date(2024, 7, 15),
              y: 3.38,
            },
            {
              x: new Date(2024, 7, 16),
              y: 3.32,
            },
            {
              x: new Date(2024, 7, 17),
              y: 3.27,
            },
            {
              x: new Date(2024, 7, 20),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 21),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 22),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 23),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 24),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 25),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 26),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 27),
              y: 3.26,
            },
            {
              x: new Date(2024, 7, 28),
              y: 3.26,
            },
          ],
        },
        {
          id: 'НБ РБ',
          color: '#F3973E',
          data: [
            {
              x: new Date(2024, 6, 20),
              y: 3.17,
            },
            {
              x: new Date(2024, 6, 23),
              y: 3.18,
            },
            {
              x: new Date(2024, 6, 24),
              y: 3.18,
            },
            {
              x: new Date(2024, 6, 25),
              y: 3.2,
            },
            {
              x: new Date(2024, 6, 26),
              y: 3.21,
            },
            {
              x: new Date(2024, 6, 27),
              y: 3.2,
            },
            {
              x: new Date(2024, 6, 30),
              y: 3.19,
            },
            {
              x: new Date(2024, 6, 31),
              y: 3.19,
            },
            {
              x: new Date(2024, 7, 1),
              y: 3.19,
            },
            {
              x: new Date(2024, 7, 2),
              y: 3.19,
            },
            {
              x: new Date(2024, 7, 3),
              y: 3.18,
            },
            {
              x: new Date(2024, 7, 6),
              y: 3.17,
            },
            {
              x: new Date(2024, 7, 7),
              y: 3.16,
            },
            {
              x: new Date(2024, 7, 8),
              y: 3.15,
            },
            {
              x: new Date(2024, 7, 9),
              y: 3.15,
            },
            {
              x: new Date(2024, 7, 10),
              y: 3.15,
            },
            {
              x: new Date(2024, 7, 13),
              y: 3.15,
            },
            {
              x: new Date(2024, 7, 14),
              y: 3.21,
            },
            {
              x: new Date(2024, 7, 15),
              y: 3.23,
            },
            {
              x: new Date(2024, 7, 16),
              y: 3.17,
            },
            {
              x: new Date(2024, 7, 17),
              y: 3.12,
            },
            {
              x: new Date(2024, 7, 20),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 21),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 22),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 23),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 24),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 25),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 26),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 27),
              y: 3.11,
            },
            {
              x: new Date(2024, 7, 28),
              y: 3.11,
            },
          ],
        },
      ],
      selectedOption: {
        value: SelectValues.RUB,
        img: rubIcon,
        label: SelectValues.RUB,
      },
      isFetching: false,
      handleSelectChange: (newValue: SelectOption) =>
        set(() => {
          return {
            selectedOption: newValue,
          };
        }),
      fetchDataByCurrency: async (currency: 'byn' | 'rub') => {
        set({ isFetching: true });

        try {
          const data = await api.getDataByCurrency(currency);
          console.log('data from server');
          console.log(data.data);

          if (currency === 'rub') {
            set({
              currentData: [
                {
                  ...data.data.AliExpress,
                  color: '#E5352F',
                },
                {
                  color: '#F3973E',
                  ...data.data['ЦБ РФ'],
                },
              ],
            });
          } else {
            set({
              currentData: [
                {
                  ...data.data.AliExpress,
                  color: '#E5352F',
                },
                {
                  color: '#F3973E',
                  ...data.data['НБ РБ'],
                },
              ],
            });
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
