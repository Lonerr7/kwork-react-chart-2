import { ResponsiveLine } from '@nivo/line';
import {
  ChartDataObject,
  DataOrigins,
  SelectOption,
  SelectValues,
} from '../../types/types';
import s from './Graph.module.css';
import { selectTodaysObject } from '../../utils/selectTodaysObj';
import enterShopIcon from '../../images/enter-shop.svg';
import { formatDateToRuLocale } from '../../utils/formatDateToRuLocale';

interface Props {
  data: ChartDataObject[];
  selectedOption: SelectOption;
}

const Graph: React.FC<Props> = ({ data, selectedOption }) => {
  // const updatedDate = data
  //   .find((dataObj) => dataObj.id === DataOrigins.ALIEXPRESS)
  //   ?.data.find((object) => selectTodaysObject(object))
  //   ?.x.toLocaleDateString('ru-RU', {
  //     day: 'numeric',
  //     month: 'numeric',
  //     year: 'numeric',
  //   });

  // Логика для нахождения минимального числа в массиве -> при смене валюты начало заливки графиков корректно изменится
  const min1 = Math.min(...data[0].data.map((item) => item.y));
  const min2 = Math.min(...data[1].data.map((item) => item.y));
  const minimal = Math.min(min1, min2);
  const minimalFloored = Math.floor(minimal);

  return (
    <div className={s.graph}>
      <ResponsiveLine
        data={data}
        enableArea
        areaBaselineValue={minimalFloored}
        defs={[
          // using plain object
          {
            id: 'gradientC',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: 'inherit' },
              { offset: 100, color: 'inherit' },
            ],
          },
        ]}
        fill={[
          // match using object query
          { match: '*', id: 'gradientC' },
        ]}
        enableCrosshair={true}
        // tooltip={(props) => {
        //   return (
        //     <div
        //       className={
        //         props.point.serieId === DataOrigins.ALIEXPRESS
        //           ? `${s.graph__tooltip_red}`
        //           : `${s.graph__tooltip}`
        //       }
        //     >
        //       <span className={s.graph__tooltipText}>
        //         {formatDateToRuLocale(props.point.data.x as Date)}
        //       </span>
        //       <span className={s.graph__tooltipText}>
        //         1$ = {props.point.data.yFormatted}
        //         {selectedOption.value === SelectValues.BYN ? ' Br' : ' ₽'}
        //       </span>
        //     </div>
        //   );
        // }}
        curve="cardinal"
        theme={{
          text: {
            fill: '#747474',
            fontSize: 11,
          },
          legends: {
            text: {
              fontSize: 11,
              fontFamily: 'Roboto, sans-serif',
            },
          },
        }}
        margin={{ top: 5, right: 55, bottom: 70, left: 15 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: minimalFloored,
          max: 'auto',
        }}
        gridYValues={3}
        gridXValues={20}
        axisTop={null}
        axisRight={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          truncateTickAt: 0,
          format: function noRefCheck(props) {
            if (selectedOption.label === SelectValues.BYN) {
              if (`${props}`.length === 1) {
                props = `${props} \u3000 `;
              } else {
                if (`${props}`.length === 3) {
                  props = `${props}\u2000\u2000 `;
                } else {
                  props = `${props} `;
                }
              }
            } else {
              if (`${props}`.length === 2) {
                props = `${props}\u2000\u2000 `;
              } else {
                props = `${props} `;
              }
            }

            return `${props}${
              selectedOption.label === SelectValues.RUB ? '₽' : 'Br'
            }`;
          },
        }}
        axisLeft={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: -89.97,
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
          // format: function noRefCheck(props) {
          //   return formatDateToRuLocale(props);
          // },
        }}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={5}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        colors={{
          datum: 'color',
        }}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom',
            translateX: -30,
            translateY: 63,
            direction: 'row',
            justify: false,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 10,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />

      <div className={s.graph__bottom}>
        <p className={s.graph__lastUpdated}>
          <span className={s.graph__lastUpdatedText}>
            {selectedOption.label === SelectValues.RUB
              ? 'Обновлено'
              : 'Абноўлены'}
          </span>
          {'10.11.2024'}
        </p>
        <a
          className={s.graph__link}
          href="https://aliexpress.ru/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={s.graph__linkText}>
            {selectedOption.label === SelectValues.RUB
              ? 'Перейти в магазин'
              : 'Перайсці ў краму'}
          </span>
          <img className={s.graph__icon} src={enterShopIcon} alt="visit" />
        </a>
      </div>
    </div>
  );
};

export default Graph;
