import './App.scss';

import CountryListContainer from './components/CountryList/CountryListContainer';
import CovidMapContainer from './components/CovidMap/CovidMapContainer';
import CovidGraphContainer from './components/CovidGraph/CovidGraphContainer';
import CovidTableContainer from './components/CovidTable/CovidTableContainer';
import FooterContainer from './components/Footer/FooterContainer';
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
        <CovidGraphContainer />
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
