import { useState } from "react"
import './Calculator.scss';

export default function Calculator() {
  const [value, setValue] = useState(1);

  const setCoinValue = e => {
      setValue(e.target.value.replace(/[^0-9.]/g, ''));
  }

  const renderInput = () => (
    <div className='input-container'>
      <input value={value} onChange={setCoinValue} />
      <div className='currency'>BTC</div>
    </div>
  );
  
  return (
    <div className='__calculator'>
      { renderInput(0) }
      <div> = </div>
      { renderInput(1) }
    </div>
  )
}