import './App.scss';

import AllCountryListContainer from './components/CountryList/AllCountryListContainer';
import CovidGraphContainer from './components/CovidGraph/CovidGraphContainer';
import CovidMapContainer from './components/CovidMap/CovidMapContainer';
import CovidTableContainer from './components/CovidTable/CovidTableContainer';
import FooterContainer from './components/Footer/FooterContainer';
import GlobalCasesContainer from './components/GlobalCases/GlobalCasesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <GlobalCasesContainer />
      <AllCountryListContainer />
      <CovidTableContainer />
      <CovidMapContainer />
      <CovidGraphContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
