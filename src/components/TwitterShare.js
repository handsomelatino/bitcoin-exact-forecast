import { useState } from "react";
import TwitterIcon from "../assets/TwitterIcon";

import './TwitterShare.scss';

export default function TwitterShare() {

  const [shares, setShares] = useState(() => 2 << 10);

  return (
    <div className="__twitter-share" onClick={() => setShares(shares + 1)}>
      <div className='bubble'>
        {shares} shares
      </div>
      <div className='arrow' />
      <TwitterIcon />
    </div>
  );
}