import TwitterIcon from "../assets/TwitterIcon";

import './TwitterShare.scss';

export default function TwitterShare() {
  return (
    <div className="__twitter-share">
      <div className='bubble'>
        2048 shares
      </div>
      <div className='arrow' />
      <TwitterIcon />
    </div>
  );
}