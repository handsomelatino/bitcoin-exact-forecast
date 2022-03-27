import classNames from "classnames";
import { DateTime } from "luxon";
import { useState } from "react";

import './ForecastChart.scss';

const BTC_PRICE = [
  1000000, 1000, 100, 1, -100, -1000, -1000000
];

const ABREVIATED_BTC_PRICE = [
  '1M', '1K', '100', 1, '-100', '-1K', '-1M'
];

const DATES = [
  DateTime.now().minus({ years: 10 }),
  DateTime.now().minus({ years: 5 }),
  DateTime.now().minus({ years: 2 }),
  DateTime.now(),
  DateTime.now().plus({ years: 2 }),
  DateTime.now().plus({ years: 5 }),
  DateTime.now().plus({ years: 10 }),
]

export default function ForecastChart() {

  const [verticalPosition, setVerticalPosition] = useState(null);

  // const dates = useMemo(() => {
  //   const now = DateTime.now();

  //   return [
  //     now,
  //     now.plus({ months: 1 })
  //   ]
  // }, []);

  const onMouseMoveChart = e => {
    const rect = e.currentTarget.getBoundingClientRect();

    window.requestAnimationFrame(() => {
      setVerticalPosition(e.clientX - rect.left);
    });
  }

  return (
    <div className='__forecast-chart'>
      <div className='y-axis'>
        { BTC_PRICE.map((price, index) => (
          <>
            <div className={classNames('y-label desktop', { positive: price > 1, negative: price < -1 })} style={{ top: `${index/BTC_PRICE.length * 100}%` }} key={price}>{ price.toLocaleString() } BTC</div>
            <div className={classNames('y-label mobile', { positive: price > 1, negative: price < -1 })} style={{ top: `${index/BTC_PRICE.length * 100}%` }} key={price}>{ ABREVIATED_BTC_PRICE[index] } { price === 1 ? 'BTC' : '' }</div>
          </>
        ))}
      </div>

      <div className='chart' onMouseMove={onMouseMoveChart}>
        { BTC_PRICE.slice(0, BTC_PRICE.length - 1).map((price, index) => (
          <div className={classNames("line", { btc: price === 1})} style={{ top: `${index/(BTC_PRICE.length - 1) * 100}%`}} />
        ))}

        <div className='line-btc-previous' />

        <div className='vertical-line' style={{ left: verticalPosition }}><div className='dot' /><div className='hover-value'>1 BTC</div></div>
        
        <div className='x-axis'>
          { DATES.map((date, index) => <div className={classNames('label', { 'mobile-hidden': index % 2 && date.year !== DateTime.now().year })}><div className='x-axis-line' /><div>{ date.year }</div></div>)}
        </div>
      </div>

    </div>
  )
}
