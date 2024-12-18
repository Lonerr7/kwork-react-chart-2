import { getCurrentMoscowDateAndTime } from './getCurrentMoscowDateAndTime';

export const transformResponseData = (
  currency: 'byn' | 'rub',
  data: any,
  isOutdated: boolean
) => {
  // 1. Создать массив объектов и получить текущую дату в Москве - если isOutdated true - тогда она понадобится для пуша в объект с выводом нулевого значения на график
  let resultArr = [];
  const { currentMoscowDate } = getCurrentMoscowDateAndTime();
  const conditionalPathToDataObject = currency === 'byn' ? 'НБ РБ' : 'ЦБ РФ'; // Условный путь для второй части данных, которая зависит от выбранной валюты

  // 2. Обрезать массивы данных до 30 штук в массиве (или 29, если данные is Outdated)
  const slicedAliDataArr = isOutdated
    ? data.AliExpress.data.slice(-29)
    : data.AliExpress.data.slice(-30);

  const slicedOtherDataArr = isOutdated
    ? data[conditionalPathToDataObject].data.slice(-29)
    : data[conditionalPathToDataObject].data.slice(-30);

  // 3. Заполнить результирующий массив данными
  resultArr = [
    {
      ...data.AliExpress, // Спредим массив вначале, чтобы просто получить оттуда поле с id
      color: '#E5352F',
      data: isOutdated
        ? [...slicedAliDataArr, { x: currentMoscowDate, y: 0 }]
        : slicedAliDataArr,
    },
    {
      ...data[conditionalPathToDataObject], // Спредим массив вначале, чтобы просто получить оттуда поле с id
      color: '#F3973E',
      data: isOutdated
        ? [...slicedOtherDataArr, { x: currentMoscowDate, y: 0 }]
        : slicedOtherDataArr,
    },
  ];

  return resultArr;
};
