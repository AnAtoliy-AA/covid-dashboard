import './App.css';

import CasesContainer from './components/Cases/CasesContainer';
import CountryLevelContainer from './components/CountryLevel/CountryLevelContainer';
import CountryRecoveredContainer from './components/CountryRecovered/CountryRecoveredContainer';
import CovidGraph from './components/CovidGraph/CovidGraph';
import CovidMap from './components/CovidMap/CovidMap';
import GlobalCasesContainer from './components/GlobalCases/GlobalCasesContainer';
import GlobalDeathsContainer from './components/GlobalDeaths/GlobalDeathsContainer';
import Header from './components/Header/Header';
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper__content'>
        <GlobalCasesContainer />
        <CasesContainer />
        <CovidMap />
        <GlobalDeathsContainer />
        <CountryRecoveredContainer/>
        <CountryLevelContainer />
        <CovidGraph />
      </div>
    </div>
  );
}

export default App;
