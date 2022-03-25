import { useState } from "react"

import './Calculator.scss';

// const UNITS = ["BTC", "mBTC", "Sats"];
// const MULTIPLIER = [1, 1000, 100000000]

export default function Calculator() {
  const [value, setValue] = useState(1);

  const setCoinValue = e => {
      setValue(e.target.value.replace(/[^0-9.]/g, ''));
  }
  // const [values, setValues] = useState([1, 1]);
  // const [units, setUnits] = useState(["BTC", "BTC"])

  // const setCoinValue = (e, i) => {
    
  //   const v = e.target.value.replace(/[^0-9.]/g, '');
  //   // const v2 = v * MULTIPLIER[UNITS.findIndex(unit => unit === units[i])] / MULTIPLIER[UNITS.findIndex(unit => unit === units[(i+1) % 2])];
  //   const v2 = v / MULTIPLIER[UNITS.findIndex(unit => unit === units[i])] * MULTIPLIER[UNITS.findIndex(unit => unit === units[(i+1) % 2])];

  //   console.log('MULTIPLIER[UNITS.findIndex(unit => unit === units[i])]:', MULTIPLIER[UNITS.findIndex(unit => unit === units[i])])
  //   console.log('MULTIPLIER[UNITS.findIndex(unit => unit === units[(i+1) % 2])]:', MULTIPLIER[UNITS.findIndex(unit => unit === units[(i+1) % 2])])

  //   setValues(i === 0 ? [v, v2] : [v2, v]);
  // }

  // const setMultiplier = (e, i) => {
  //   const u = [...units];
  //   u[i] = e.target.value;
  //   setUnits(u);
  // }

  const renderInput = () => (
    <div className='input-container'>
      <input value={value} onChange={setCoinValue} />
      <div className='currency'>BTC</div>
    </div>
  );

  // const renderInput = i => (
  //   <div className='input-container'>
  //     <input value={values[i]} onChange={e => setCoinValue(e, i)} />
  //     {/* <div className='currency'>BTC</div> */}
  //     <select className='currency' value={units[i]} onChange={e => setMultiplier(e, i)}>
  //       { UNITS.map(value => <option value={value}>{ value }</option>) }
  //     </select>
  //   </div>
  // )
  
  return (
    <div className='__calculator'>
      { renderInput(0) }
      <div> = </div>
      { renderInput(1) }
    </div>
  )
}