import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://skaweb.com/alidollar/data/',
});

export const api = {
  getDataByCurrency: async (selectedCurrency: 'byn' | 'rub') =>
    await axiosInstance.get(`${selectedCurrency}.json`), //!
};
