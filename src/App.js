//import logo from './logo.svg';
import './App.css';
import ButtonSelectAge from './components/button-select-age.jsx';
import ButtonSelectGift from './components/button-select-gift.jsx';
import CountrySelector from './components/country-selector.jsx';
import ButtonSelectStandouts from './components/button-select-standouts.jsx';
import RatingsBar from './components/ratings-bar.jsx';

function App() {
  return (
    <div className='App'>
      <header className='App-container'>
        <p className='Title-text'>
          Ratings
        </p>
        <div className='Rating-container'>
          <p class='Category-text'>
            Quality
          </p>
          <RatingsBar />
          <p class='Category-text'>
            Design
          </p>
          <RatingsBar />
          <p class='Category-text'>
            Experience
          </p>
          <RatingsBar />
          <p class='Category-text'>
            Product Standouts
          </p>
          <p className='Category-subtext'>
            Choose up to 5 that best apply (optional)
          </p>
          <ButtonSelectStandouts />
          <p class='Category-text'>
            <b>About You</b>
          </p>
          <p class='Category-text'>
            Age Range
          </p>
          <p class='Category-subtext'>
            Choose <b>one</b>
          </p>
          <ButtonSelectAge />
          <p class='Category-text'>
            Bought For
          </p>
          <p class='Category-subtext'>
            Choose <b>one</b>
          </p>
          <ButtonSelectGift />
          <p class='Category-text'>
            Country
          </p>
          <CountrySelector placeholder='Australia' />
        </div>
        <div className='Next-container'>
          <p className='Next-text'>
            Next
          </p>
        </div>
      </header>
    </div >
  );
}

export default App;
