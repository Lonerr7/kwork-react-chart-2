import { formatStringDate } from './formatStringDate';

export const getCurrentMoscowDateAndTime = () => {
  const currentMoscowDateTimeString = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
  });

  // Распарсить строку
  const [currentMoscowDate, currentMoscowTime] =
    currentMoscowDateTimeString.split(', ');
  const formattedCurrentMoscowDate = formatStringDate(currentMoscowDate);

  return {
    formattedCurrentMoscowDate,
    currentMoscowTime,
    currentMoscowDate,
  };
};
