//import logo from './logo.svg';
import Progress from './components/progress.jsx';
import './App.css';
import CountrySelector from './components/country-selector.jsx';
import ButtonStandout from './components/button-standout.jsx';
import ButtonChooseOne from './components/button-choose-one.jsx';

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
          <Progress></Progress>
          <p class='Category-text'>
            Design
          </p>
          <p class='Category-text'>
            Experience
          </p>
          <p class='Category-text'>
            Product Standouts
          </p>
          <p className='Category-subtext'>
            Choose up to 5 that best apply (optional)
          </p>
          <div className='Product-standout-container'>
            <ButtonStandout buttonName='Accurate Timekeeping' />
            <ButtonStandout buttonName='High Quality' />
            <ButtonStandout buttonName='Durable' />
            <ButtonStandout buttonName='Elegant' />
            <ButtonStandout buttonName='Good Weight' />
            <ButtonStandout buttonName='Versatile' />
            <ButtonStandout buttonName='Looks Expensive' />
            <ButtonStandout buttonName='Attracts Compliments' />
            <ButtonStandout buttonName='Unique' />
            <ButtonStandout buttonName='Great Gift' />
            <ButtonStandout buttonName='Great Value' />
          </div>
          <p class='Category-text'>
            <b>About You</b>
          </p>
          <p class='Category-text'>
            Age Range
          </p>
          <p class='Category-subtext'>
            Choose <b>one</b>
          </p>
          <div className='Age-range-container'>
            <ButtonChooseOne buttonName='Under 18' />
            <ButtonChooseOne buttonName='18 - 24' />
            <ButtonChooseOne buttonName='25 - 34' />
            <ButtonChooseOne buttonName='35 - 44' />
            <ButtonChooseOne buttonName='45 - 54' />
            <ButtonChooseOne buttonName='54 - 64' />
            <ButtonChooseOne buttonName='65+' />
          </div>
          <p class='Category-text'>
            Bought For
          </p>
          <p class='Category-subtext'>
            Choose <b>one</b>
          </p>
          <div className='Bought-for-container'>
            <ButtonChooseOne buttonName='Personal Use' />
            <ButtonChooseOne buttonName='Gift' />
          </div>
          <p class='Category-text'>
            Country
          </p>
          <div className='Country-select'>
            <CountrySelector
              placeholder='Australia'>
            </CountrySelector>
          </div>
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
