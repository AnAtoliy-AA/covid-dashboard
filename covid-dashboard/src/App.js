import './App.css';

import CasesContainer from './components/Cases/CasesContainer';
import CountryLevel from './components/CountryLevel/CountryLevel';
import CovidGraph from './components/CovidGraph/CovidGraph';
import CovidMap from './components/CovidMap/CovidMap';
import GlobalCases from './components/GlobalCases/GlobalCases';
import GlobalDeaths from './components/GlobalDeaths/GlobalDeaths';
import Header from './components/Header/Header';
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper__content'>
        <GlobalCases />
        <CasesContainer />
        <CovidMap />
        <GlobalDeaths />
        <CountryLevel />
        <CovidGraph />
      </div>
    </div>
  );
}

export default App;
