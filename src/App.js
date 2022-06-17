import classNames from 'classnames';
import { useState } from 'react';
import { TwitterShareButton } from 'react-share';

import Calculator from './components/Calculator';
import ForecastChart from './components/ForecastChart';
import TwitterShare from './components/TwitterShare';
import LightningQRCode from './assets/LightningQRCode';

import './App.scss';

function App() {

  const [highlightedNote, setHighlightedNote] = useState(null);
  const [viewQRCode, setViewQRCode] = useState(false);

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
            <div className='range'>2012 &#8212; 2140</div>
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
          <p>It is kind of a prank, but the main idea here is that there is a <strong>fixed maximum supply of 21 million bitcoin,</strong> meaning that if you own 1 bitcoin now, you will always own (at least) 1 / 21 millionth of all bitcoin in existence <a href="#deflation" onClick={onClickDeflation}>or more¹</a>.</p>
          <p>That's approximately 0.00000476% of the supply. It sounds like an incredibly small number, but once you realize there are almost 8 billion (~7,900,000,000) of us in the planet, this means that <strong>less than 0.2 percent of the population can <u>ever</u> own more than 1 bitcoin.</strong></p>
          <p>Considering the potential that bitcoin has, there is a very high chance its value will continue growing (keep reading to know why).</p>

          <h3>This is stupid. $1 USD = $1 USD. 1 Eur = 1 Eur. Right?</h3>
          <p>Yes, you are correct... unless you add a time frame to that calculation.</p>
          <p>Say you owned a $1 bill in 1980. Adjusted for an annual inflation rate of 3.12%, that dollar would only be worth 28 cents now.</p>
          <p>1980 sounds like a long time ago? Let's just take into account the aggregate official inflation for the last two years (2019 to 2021): about 10%.</p>
          <p>That means that if you used your time, energy, and sacrifice to save $50,000 in the bank for emergencies or a big investment, suddenly $5,000 vanished from your account in two years.</p>
          <p>For 2022, inflation is forecasted to be 8%.</p>

          <h3>But Inflation Is Good™</h3>
          <p>You can do your own research and get your own perspective about inflation. No matter how you see it though, experts and citizens alike will always agree that hyperinflation is a <em>not</em> good thing.</p>
          <p>The reported 10% is only the tip of the iceberg as it is based on goods and services. When you take into account other sectors, matters get worse:</p>
          <p>House pricing in the United States is up almost 20% in the last 12 months (<a rel='nofollow' href='https://www.whitehouse.gov/cea/written-materials/2021/09/09/housing-prices-and-inflation/'>whitehouse.gov</a>).</p>
          <p>Education is up by more than 100% since the year 2000 (<a rel='nofollow' href='https://educationdata.org/average-cost-of-college-by-year'>educationdata.org</a>). If you have young children right now, you can safely expect to pay at least twice as much for tuition when they are ready for an academic degree.</p>
          <p>As a citizen of three different countries all in different continents I can safely attest that this model is not unique to the United States.</p>
          
          <h3>Knowing how much Bitcoin is in USD is important, as the dollar is still the world reserve and most used currency.</h3>
          <p>I agree completely, and that's why I created <a href='https://btc2fiat.me'>btc2fiat.me</a> – B2F for short – an extremely minimalistic BTC to USD calculator.</p>

          <h3>Bitcoin is super risky! The price is so volatile.</h3>
          <p>Bitcoin might <em>look</em> risky, but once you leverage the risk of the current inflation happening worldwide, bitcoin might be one of the only choices to hedge against inflation for the average person or the unbanked.</p>
          <p>If you look at the big picture instead of the day-to-day price of bitcoin, the results are clear: </p>
          <p><strong>Regardless of price and risk,</strong> 100% of people that bought any amount of bitcoin and held it for three years have positive returns (<a href='https://www.reddit.com/r/Bitcoin/comments/tclb6o/bitcoin_hodl_analysis_anyone_who_has_held_bitcoin/'>reddit chart</a>).</p>
          <p>The positive returns apply not only to the US dollar but especially in other currencies such as the Argentinean Peso, the Russian Ruble, or even worse, the Turkish Lira which <a href='https://en.wikipedia.org/wiki/2018%E2%80%932022_Turkish_currency_and_debt_crisis#:~:text=After%20a%20period%20of%20modest,its%20value%20in%202021%20alone.'>lost 44% of its value in 2021 alone.</a></p>
          <p>As of 2022, Turkey is the 27th country by exports, right below Brazil and bigger than New Zealand, Austria, or Denmark.</p>
          <p>All fiat currencies are losing value, and the problem gets exacerbated when the bigger ships, the de facto currencies such as the US dollar and Euro start steadily losing value.</p>

          <h3>Okay, I understand that the fiat ship <em>might be sinking.</em> What do I do?</h3>
          <p>Get to know more about Bitcoin's protocol (instead of what the usual media or traders tell you), read hard literature about economics, bitcoin, and politics. Do your own research and make your own decisions.</p>

          <h3>Bitcoin is not backed by anything. The US dollar at least is backed by something!</h3>
          <p>The US dollar that we all know is <em>fiat money</em>, or in other words a government-issued currency <strong>not backed by any commodity such as gold</strong>. It has been so for the last 50 years. Every country now uses fiat currency.</p>

          <p>But most important:</p>

          <h3>Bitcoin is so much more than just an alternative to fiat.</h3>
          <p>Bitcoin is our <u>only</u> way <em>out</em> of the current centralized fiat system, where the few benefit at the expense of the many.</p>
          <p>Money should be sovereign, it should belong to the people who earn it, without being intentionally devalued. Nakamoto said it best:</p>
          <p className='center orange'><em>"The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust."</em></p>
          <p>Money should be in the hands of people, the unbanked, and those whom the banks no longer want to serve because of personal or political differences that they do not agree on or simply decide to censor.</p>
          <p>Money is time, time is energy, and for the first time in the history of human civilization, we can privately hold any amount of that energy inside a cryptographic puzzle that we can take with us anywhere we want in a small device, a private key, or even a list of a few words memorized in our brain. Our effort, our keys, our coins.</p>
          <p>We can use it to pay others without the need of a third party, and not one owner can devalue it at will.</p>

          <h3>Share this with a friend!</h3>
          <p>I created this website as a parody of how often I found myself looking at charts trying to predict the market (more than I care to admit), to the point that it affected my sleep and even my family's well-being.</p>
          <p>It was not until I understood more about the mathematical principles behind Bitcoin and the power and mission of bitcoin it that I finally got rid of the idea of getting rich quick.</p>
          <p>If it helps you and you believe in bitcoin, be sure to share it around! Word of mouth is what made bitcoin what it is today and we can keep growing it, together.</p>

          <h3>Support the cause</h3>
          <p>This project is brought to you by a <strong><a href="https://handsomelatino.com">Handsome Latino</a></strong>, read my story and learn how I have set a goal to help others become aware of the enormous cost fiat has in our society.</p>
          <p className="center"><a className="donate-button" href="https://pay.handsomelatino.com/api/v1/invoices?storeId=3zecRWVXGTMtpsE4157U8hjzL9iwBfPFBroABh3oWD3r&currency=USD" target="_blank" rel="noreferrer">Donate and Support</a></p>
          <p>Tipping with Lightning? Use Lightning Address: <code>handsome_latino@stacker.news</code></p>
          <p className='center'>
            <a className='donate-button' href='lightning:lnurl1dp68gurn8ghj7um5v93kketj9ehx2amn9uh8wetvdskkkmn0wahz7mrww4excup0dpskuerndakk2hmvv96xjmn02f3vg9'>⚡️ handsome_latino@stacker.news</a>
            <div><div className='view-qr-code' role='button' onClick={() => setViewQRCode(!viewQRCode)}>{ viewQRCode ? 'Hide' : 'View' } QR Code</div></div>

            <div className='qr-code-container' style={{ display: viewQRCode ? undefined : 'none' }}><LightningQRCode /></div>
          </p>

          <h3>Comments, suggestions or corrections? Feedback is welcome!</h3>
          <p>Let me know through the <a href="https://github.com/handsomelatino/bitcoin-exact-forecast">Github repository</a>. Translations are also welcome.</p>

          <h3>NOTES</h3>
          <p id='deflation' className={classNames('note', { highlighted: highlightedNote === 'deflation' })}>¹ DEFLATION: Bitcoin hasn't been fully mined (currently the supply is about 19 million). Bitcoin is in fact <em>deflationary</em>, meaning that once Bitcoin are lost, you will own even <strong>more</strong> of the actual supply.</p>
        </div>
      </section>

      <div class="not-your-keys-not-your-coins"><strong>DISCLAIMER:</strong> All content provided is for informational porpuses and does not constitute legal advice or financial accuracy. Don't trust, verify. Bitcoin can be a highly risky asset that can lead to major losses, <a href="https://www.youtube.com/watch?v=dnC5mFaIW3Q" target="_blank" rel='noreferrer'>especially if you don't hold your own keys, securely.</a></div>

      <TwitterShareButton title="Exact forecast of #Bitcoin for the next 5 years:" url='https://bitcoinexactforecast.com' via='handsome_latino' style={{ position: 'absolute' }}>
        <TwitterShare />
      </TwitterShareButton>
    </div>
  );
}

export default App;
