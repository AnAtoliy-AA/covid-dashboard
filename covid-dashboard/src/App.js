import './App.scss';

import CountryListContainer from './components/CountryList/CountryListContainer';
import CovidGraphContainer from './components/CovidGraph/CovidGraphContainer';
import CovidMap from './components/CovidMap/CovidMap';
import CovidTableContainer from './components/CovidTable/CovidTableContainer';
import GlobalCasesContainer from './components/GlobalCases/GlobalCasesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
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
        <CovidGraphContainer />
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
