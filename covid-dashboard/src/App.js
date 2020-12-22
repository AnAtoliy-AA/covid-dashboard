import './App.scss';

import CountryListContainer from './components/CountryList/CountryListContainer';
<<<<<<< HEAD
import CovidGraph from './components/CovidGraph/CovidGraph';
import CovidMapContainer from './components/CovidMap/CovidMapContainer';
=======
import CovidGraphContainer from './components/CovidGraph/CovidGraphContainer';
import CovidMap from './components/CovidMap/CovidMap';
>>>>>>> 44642e172c2f104086fe6aea31035102a40fdcd5
import CovidTableContainer from './components/CovidTable/CovidTableContainer';
import FooterContainer from './components/Footer/FooterContainer'
import GlobalCasesContainer from './components/GlobalCases/GlobalCasesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
<<<<<<< HEAD
=======
import FooterContainer from './components/Footer/FooterContainer';
>>>>>>> 44642e172c2f104086fe6aea31035102a40fdcd5
import React from 'react';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-wrapper__content'>
        <GlobalCasesContainer />
        <CountryListContainer />
        <CovidTableContainer />
<<<<<<< HEAD
        <CovidMapContainer />
        <CovidGraph />
=======
        <CovidMap />
        <CovidGraphContainer />
>>>>>>> 44642e172c2f104086fe6aea31035102a40fdcd5
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
