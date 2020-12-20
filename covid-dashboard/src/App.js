import './App.scss';

import CountryListContainer from './components/CountryList/CountryListContainer';
import CovidGraph from './components/CovidGraph/CovidGraph';
import CovidMapContainer from './components/CovidMap/CovidMapContainer';
import CovidTableContainer from './components/CovidTable/CovidTableContainer';
import FooterContainer from './components/Footer/FooterContainer'
import GlobalCasesContainer from './components/GlobalCases/GlobalCasesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-wrapper__content'>
        <GlobalCasesContainer />
        <CountryListContainer />
        <CovidTableContainer />
        <CovidMapContainer />
        <CovidGraph />
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
