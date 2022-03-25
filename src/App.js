import { TwitterShareButton } from 'react-share';
import './App.scss';
import Calculator from './components/Calculator';
import ForecastChart from './components/ForecastChart';
import TwitterShare from './components/TwitterShare';

function App() {
  return (
    <div className="App">
      <header className='top'>
        <div className='content'>
          <h1>Bitcoin<strong>Exact</strong>Forecast</h1>
        </div>
      </header>

      <section className='main'>
        <div className='forecast-container'>
          
          <div className='title'>
            <div>Forecast &gt; Bitcoin (BTC)</div>
            <div className='range'>2012 &#8212; 2032</div>
          </div>
          <ForecastChart />
          <Calculator />

          <div className='q-a'>
            <h2>People also ask</h2>

            <h3>How much for 1 btc?</h3>
            <p>1 btc = 1 btc</p>
            <p>In other words one bitcoin is equal to one bitcoin.</p>

            <h3>How much is 1 bitcoin now compared to 2009?</h3>
            <p>If you invested and bought 1 btc in 2009, you would have exactly 1 bitcoin today.</p>

            <h3>What do you mean by 1 btc = 1 btc. Is this website a cheap prank?</h3>
            <p>It may be a prank (but not a cheap one!) since it was designed and programmed using quite some effort.</p>
            <p>But also, the main idea is that there is a <strong>fixed supply of 21 million bitcoin,</strong> meaning that if you own 1 bitcoin now, you will always own (at least) 1 / 21 millionth of the supply.</p>
            <p>That's approximately 0.000000048% of the supply. It sounds like an incredibly small number, but once you realize there are almost 8 billion (~7,900,000,000) of us in the planet, this means that <strong>less than 0.2 percent of the population can <u>ever</u> own more than 1 bitcoin.</strong></p>

            <h3>This is stupid. $1 USD = $1 USD. 1 Eur = 1 Eur. Right?</h3>
            <p>Yes, you are correct... unless you add a time frame to that calculation.</p>
            <p>Say you owned a $1 bill in 1980. Adjusted for an annual inflation rate of 3.12%, that dollar would only be worth 28 cents now.</p>

            <h3>But Inflation Is Good™</h3>
            <p>You can do your own homework and resarch and get your own perspective about inflation. But no matter how you see it, everyone will agree that hyperinflation is a <em>not</em>good thing.</p>
            <p>Maybe 1980 sounds like it happened a long time ago. So let's just take into account the official figure of inflation for the last two years (2019 to 2021): about 10%.</p>
            <p>I will tell you my own personal story: I saved up $50,000 in the bank for cushion and in those two years inflation ate $5,000</p>
            <p></p>
          </div>
        </div>
      </section>

      <a href='https://twitter.com/handsome_latino'>@handsome_latino</a>

      <TwitterShareButton title="Bitcoin's exact forecast for the next 5 years #bitcoinexactforecast" url='https://bitcoinexactforecast.com' via='handsome_latino'>
        <TwitterShare />
      </TwitterShareButton>
    </div>
  );
}

export default App;
