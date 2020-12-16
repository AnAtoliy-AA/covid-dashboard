import './App.scss';

import CountryListContainer from './components/CountryList/CountryListContainer';
import CovidGraph from './components/CovidGraph/CovidGraph';
import CovidMap from './components/CovidMap/CovidMap';
import CovidTableContainer from './components/CovidTable/CovidTableContainer';
import GlobalCasesContainer from './components/GlobalCases/GlobalCasesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer'
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-wrapper__content'>
        <GlobalCasesContainer />
        <CountryListContainer />
        <CovidTableContainer />
        <CovidMap />
        <CovidGraph />
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
