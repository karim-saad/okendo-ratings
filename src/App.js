//import logo from './logo.svg';
import './App.css';
import ButtonSelectAge from './components/button-select-age';
import ButtonSelectGift from './components/button-select-gift';
import CountrySelector from './components/country-selector';
import ButtonSelectStandouts from './components/button-select-standouts';
import RatingsBar from './components/ratings-bar';
import RatingSubheading from './components/rating-subheading'

function App() {
  return (
    <div className='App'>
      <header className='App-container'>
        <p className='Title-text'>
          Ratings
        </p>
        <div className='Rating-container'>
          <p className='Category-text'>
            Quality
          </p>
          <RatingsBar />
          <RatingSubheading />
          <p className='Category-text'>
            Design
          </p>
          <RatingsBar />
          <RatingSubheading />
          <p className='Category-text'>
            Experience
          </p>
          <RatingsBar />
          <RatingSubheading />
          <p className='Category-text'>
            Product Standouts
          </p>
          <p className='Category-subtext'>
            Choose up to 5 that best apply (optional)
          </p>
          <ButtonSelectStandouts />
          <p className='Category-text'>
            <b>About You</b>
          </p>
          <p className='Category-text'>
            Age Range
          </p>
          <p className='Category-subtext'>
            Choose <b>one</b>
          </p>
          <ButtonSelectAge />
          <p className='Category-text'>
            Bought For
          </p>
          <p className='Category-subtext'>
            Choose <b>one</b>
          </p>
          <ButtonSelectGift />
          <p className='Category-text'>
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
