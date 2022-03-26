import classNames from 'classnames';
import { useState } from 'react';
import { TwitterShareButton } from 'react-share';
import './App.scss';
import Calculator from './components/Calculator';
import ForecastChart from './components/ForecastChart';
import TwitterShare from './components/TwitterShare';

function App() {

  const [highlightedNote, setHighlightedNote] = useState(null);

  const onClickDeflation = () => {
    setHighlightedNote('deflation');
  }

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
        </div>

        <div className='q-a'>
          <h2>People also ask</h2>

          <h3>How much for 1 btc?</h3>
          <p>1 btc = 1 btc</p>
          <p>In other words one bitcoin is equal to one bitcoin.</p>

          <h3>How much is 1 bitcoin now compared to 2009?</h3>
          <p>If you invested and bought 1 btc in 2009, you would have exactly 1 bitcoin today.</p>

          <h3>What do you mean by 1 BTC = 1 BTC. Is this a cheap prank?</h3>
          <p>It's kind of a prank, but the main idea here is that there is a <strong>fixed supply of 21 million bitcoin,</strong> meaning that if you own 1 bitcoin now, you will always own (at least) 1 / 21 millionth of the supply <a href="#deflation" onClick={onClickDeflation}>or more¹</a>.</p>
          <p>That's approximately 0.000000048% of the supply. It sounds like an incredibly small number, but once you realize there are almost 8 billion (~7,900,000,000) of us in the planet, this means that <strong>less than 0.2 percent of the population can <u>ever</u> own more than 1 bitcoin.</strong></p>

          <h3>This is stupid. $1 USD = $1 USD. 1 Eur = 1 Eur. Right?</h3>
          <p>Yes, you are correct... unless you add a time frame to that calculation.</p>
          <p>Say you owned a $1 bill in 1980. Adjusted for an annual inflation rate of 3.12%, that dollar would only be worth 28 cents now.</p>
          <p>1980 sounds like a long time ago? Let's just take into account the official figure of inflation for the last two years (2019 to 2021): about 10%.</p>
          <p>That means that if you used your time, energy, and sacrifice to save $50,000 in the bank for emergencies or a big investment two years ago, suddenly $5,000 vanished from your account in two years.</p>

          <h3>But Inflation Is Good™</h3>
          <p>You can do your own research and get your own perspective about inflation. No matter how you see it though, experts and citizens alike will always agree that hyperinflation is a <em>not</em> good thing.</p>
          <p>The reported 10% is only the tip of the iceberg as it is based on goods and services. When you take into account other sectors, matters get worse:</p>
          <p>House pricing in the US is up almost 20% in the last 12 months in the US (<a rel='nofollow' href='https://www.whitehouse.gov/cea/written-materials/2021/09/09/housing-prices-and-inflation/'>whitehouse.gov</a>).</p>
          <p>Education is up by more than 100% since the year 2000 (<a rel='nofollow' href='https://educationdata.org/average-cost-of-college-by-year'>educationdata.org</a>). If you have young children right now, you can safely expect to pay at least twice as much for tuition when they are ready for an academic degree.</p>
          <p>As a citizen of three different countries all in different continents I can safely attest that this model is not unique to the United States.</p>
          
          <h3>Bitcoin is super risky! The price is so volatile.</h3>
          <p>Bitcoin might <em>look</em> risky, but once you leverage the risk of the current inflation happening worldwide, bitcoin might be one of the only choices for the average person.</p>
          <p>Once you look at the big picture instead of the day-to-day price of bitcoin, the results are clear: </p>
          <p>Regardless of price and risk, a 100% of people that bought any amount of bitcoin and held it for three years, would now have positive returns (<a href='https://www.reddit.com/r/Bitcoin/comments/tclb6o/bitcoin_hodl_analysis_anyone_who_has_held_bitcoin/'>reddit chart</a>).</p>
          <p>This applies to the US dollar but in other currencies such as the Argentinean Peso or the Russian Ruble, bitcoin has even bigger positive returns.</p>

          <h3>Bitcoin is not backed by anything. The US dollar at least is backed by something!</h3>
          <p>The US dollar that we all know is <em>fiat money</em>, or in other words a government-issued currency not backed by any commodity (such as gold). It has been so for the last 50 years.</p>
          
          <h3>Share this with a friend!</h3>
          <p>I created this website as a parody of how often I found myself checking for the price of bitcoin online (more than I care to admit) and how much it affected my well-being. It was not until I understood more about the power and mission of bitcoin that I realized the volatility of idea of getting rich quick is not what makes bitcoin strong.</p>

          <h3>NOTES</h3>
          <p id='deflation' className={classNames('note', { highlighted: highlightedNote === 'deflation' })}>¹ DEFLATION: Bitcoin hasn't been fully mined (currently the supply is about 19 million). Bitcoin is in fact <em>deflationary</em>, meaning that once Bitcoin are lost, you will own even <strong>more</strong> of the actual supply.</p>
        </div>
      </section>

      <TwitterShareButton title="Bitcoin's exact forecast for the next 5 years #bitcoinexactforecast" url='https://bitcoinexactforecast.com' via='handsome_latino'>
        <TwitterShare />
      </TwitterShareButton>
    </div>
  );
}

export default App;
