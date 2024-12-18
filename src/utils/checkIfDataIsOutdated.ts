import { formatStringDate } from './formatStringDate';
import { getCurrentMoscowDateAndTime } from './getCurrentMoscowDateAndTime';

export const checkIfDataIsOutdated = (data: any) => {
  const { currentMoscowTime, formattedCurrentMoscowDate } =
    getCurrentMoscowDateAndTime();

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
