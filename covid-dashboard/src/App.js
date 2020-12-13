import './App.scss';

import CasesContainer from './components/Cases/CasesContainer';
import CovidGraph from './components/CovidGraph/CovidGraph';
import CovidMap from './components/CovidMap/CovidMap';
import CovidTableContainer from './components/CovidTable/CovidTableContainer';
import GlobalCasesContainer from './components/GlobalCases/GlobalCasesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-wrapper__content'>
        <GlobalCasesContainer />
        <CasesContainer />
        <CovidTableContainer />
        <CovidMap />
        <CovidGraph />
      </div>
    </div>
  );
}

export default App;
