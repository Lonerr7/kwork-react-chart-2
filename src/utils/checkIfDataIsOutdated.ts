import { formatStringDate } from './formatStringDate';

export const checkIfDataIsOutdated = (data: any) => {
  const currentMoscowDateTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
  });

  // Распарсить строку
  const [currentMoscowDate, currentMoscowTime] =
    currentMoscowDateTime.split(', ');
  const formattedCurrentMoscowDate = formatStringDate(currentMoscowDate);
  console.log(formattedCurrentMoscowDate, currentMoscowTime);

  // Получить последнюю дату в массиве данных
  const aliExpressObj = data.data.AliExpress;
  const lastAliDataDate = aliExpressObj.data[aliExpressObj?.data.length - 1].x;
  const formattedLastAliDate = formatStringDate(lastAliDataDate);

  // Сравниваем даты
  if (
    new Date(formattedCurrentMoscowDate) > new Date(formattedLastAliDate) &&
    currentMoscowTime >= '00:00:02'
  ) {
    return true;
  }

  return false;
};
