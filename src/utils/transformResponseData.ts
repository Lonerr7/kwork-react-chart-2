export const transformResponseData = (currency: 'byn' | 'rub', data: any) => {
  // 1. Создать массив объектов
  let resultArr = [];

  // 2. Добавить в каждый объект свой цвет графика
  // 3. Обрезать массив данных до 30 штук в массиве
  const slicedAliDataArr = data.AliExpress.data.slice(-30);
  const slicedCB_RFDataArr = [];
  const slicedNB_RBDataArr = [];

  resultArr = [
    {
      ...data.AliExpress,
      color: '#E5352F',
      data: slicedAliDataArr,
    },
  ];

  if (currency === 'rub') {
    slicedCB_RFDataArr.push(...data['ЦБ РФ'].data.slice(-30));

    resultArr = [
      {
        ...data['ЦБ РФ'],
        color: '#F3973E',
        data: slicedCB_RFDataArr,
      },
      ...resultArr,
    ];
  } else {
    slicedNB_RBDataArr.push(...data['НБ РБ'].data.slice(-30));
    resultArr = [
      {
        ...data['НБ РБ'],
        color: '#F3973E',
        data: slicedNB_RBDataArr,
      },
      ...resultArr,
    ];
  }

  return resultArr;
};
