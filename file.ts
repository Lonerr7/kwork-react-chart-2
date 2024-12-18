import { getCurrentMoscowDateAndTime } from './getCurrentMoscowDateAndTime';

export const transformResponseData = (
  currency: 'byn' | 'rub',
  data: any,
  isOutdated: boolean
) => {
  // 1. Создать массив объектов и получить текущую дату в Москве - если isOutdated true - тогда она понадобится для пуша в объект с выводом нулевого значения на график
  let resultArr = [];
  const { currentMoscowDate } = getCurrentMoscowDateAndTime();

  // 3. Обрезать массив AliExpress до 30 штук в массиве (или 29, если данные is Outdated)
  const slicedAliDataArr = isOutdated
    ? data.AliExpress.data.slice(-29)
    : data.AliExpress.data.slice(-30);
  const otherDataArray = [];
  const slicedCB_RFDataArr = [];
  const slicedNB_RBDataArr = [];

  // 3. Объект AliExpress присутствует всегда, поэтому его не нужно условно заполнять лишний раз исходя из выбранной валюты
  resultArr = [
    {
      ...data.AliExpress,
      color: '#E5352F',
      data: isOutdated
        ? [[...slicedAliDataArr], { x: currentMoscowDate, y: 0 }]
        : slicedAliDataArr,
    },
  ];

  console.log(data['ЦБ РФ']);

  if (currency === 'rub') {
    slicedCB_RFDataArr.push(...data['ЦБ РФ'].data.slice(-30));

    resultArr = [
      ...resultArr,
      {
        ...data['ЦБ РФ'], // Спредим массив вначале, чтобы просто получить оттуда поле с id
        color: '#F3973E',
        data: slicedCB_RFDataArr,
      },
    ];
  } else {
    slicedNB_RBDataArr.push(...data['НБ РБ'].data.slice(-30));

    resultArr = [
      ...resultArr,
      {
        ...data['НБ РБ'],
        color: '#F3973E',
        data: slicedNB_RBDataArr,
      },
    ];
  }

  return resultArr;
};
