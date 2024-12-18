import { useEffect, useState } from 'react';
import Select from 'react-select';
import s from './Converter.module.css';
import {
  ChartDataObject,
  DataOrigins,
  SelectOption,
  SelectValues,
} from '../../types/types';
import usdIcon from '../../images/USD 1.svg';
import rubIcon from '../../images/RUB 1.svg';
import bynIcon from '../../images/BYN 1.svg';
import equalsIcon from '../../images/equals.svg';
import { selectTodaysObject } from '../../utils/selectTodaysObj';
import { roundNumToTwoDecimals } from '../../utils/roundNumToTwoDecimals';
import { getDataObjectById } from '../../utils/getDataObjectById';

const currencyOptions: any = [
  { label: SelectValues.RUB, value: SelectValues.RUB, img: rubIcon },
  { label: SelectValues.BYN, value: SelectValues.BYN, img: bynIcon },
];

interface Props {
  actualData: ChartDataObject[] | null;
  selectedOption: SelectOption;
  handleSelectChange: any;
}

const Converter: React.FC<Props> = ({
  actualData,
  selectedOption,
  handleSelectChange,
}) => {
  // Получаем объекты для дефолтного значения в конвертере
  const todaysDataObj = getDataObjectById(actualData!, DataOrigins.ALIEXPRESS)!;

  // Получаем дефолтные значения каждой валюты для отображения в конвертере
  const [todaysCurrencyValue, setTodaysCurrencyValue] = useState(
    todaysDataObj.data[todaysDataObj.data.length - 1].y
  );

  // Копии сегодняшних валют для того, если пользователь захочет ввести свое значение -> чтобы оно пересчиталось. Если введет 0 - то потом без этих копий не получится считать
  const todaysCurrencyValueCopy =
    todaysDataObj.data[todaysDataObj.data.length - 1].y;

  // Текст, который пользователь вводит для конвертации валюты
  const [usdText, setUsdText] = useState('1');

  // Обрабатываем ввод чисел в USD
  const onUsdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsdText(e.currentTarget.value);
  };

  // Обрабатываем выбор другой валюты
  const onSelectChange = (newValue: any) => {
    setUsdText('1');
    handleSelectChange(newValue);
  };

  // Сетаем актуальное значение текущего дня в конвертер исходя из выбранной валюты
  useEffect(() => {
    setTodaysCurrencyValue(todaysDataObj.data[todaysDataObj.data.length - 1].y);
  }, [actualData]);

  // Обрабатываем автоматический пересчет валюты исходя из введенного числа пользователем
  useEffect(() => {
    if (
      todaysCurrencyValue !== undefined &&
      todaysCurrencyValueCopy !== undefined
    ) {
      setTodaysCurrencyValue(+(todaysCurrencyValueCopy * +usdText).toFixed(2));
    }
  }, [usdText]);

  return (
    <div className={s.converter}>
      <div className={s.converter__box}>
        <input
          className={s.converter__input}
          type="number"
          value={usdText}
          onChange={onUsdInputChange}
        />

        <div className={`${s.converter__currency} ${s.converter__usd}`}>
          <img className={s.converter__icon} src={usdIcon} alt="usd" />
          <span className={s.converter__currencyName}>USD</span>
        </div>
      </div>

      <img src={equalsIcon} alt="equals" />

      <div className={s.converter__box}>
        <div className={s.converter__boxInner}>
          <span className={s.converter__value}>
            {roundNumToTwoDecimals(todaysCurrencyValue)}
          </span>

          <Select
            classNamePrefix="select"
            defaultValue={selectedOption}
            options={currencyOptions}
            onChange={onSelectChange}
            isSearchable={false}
            formatOptionLabel={(currency: any) => (
              <div className="select__currencyBox">
                <img
                  className={s.converter__icon}
                  src={currency.img}
                  alt="flag"
                />
                <span className="select__optionText">{currency.value}</span>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
