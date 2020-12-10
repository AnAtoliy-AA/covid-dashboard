import { setActiveCountryActionCreator, setCountriesDataActionCreator, setFlagUrlActionCreator, setGlobalDataActionCreator, setPopulationActionCreator } from '../../redux/cases-reducer';

import Cases from './Cases';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        countries: state.cases.countries,
        country: state.cases.country,
        global: state.cases.global,
        population: state.cases.population,
        flag: state.cases.flag,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCountriesData: (countries) => {
            dispatch(setCountriesDataActionCreator(countries))
        },
        setGlobalData: (global) => {
            dispatch(setGlobalDataActionCreator(global))
        },
        setActiveCountry: (country) => {
            dispatch(setActiveCountryActionCreator(country))
        },
        setPopulation: (population) => {
            dispatch(setPopulationActionCreator(population))
        },
        setFlagUrl: (flag) => {
            dispatch(setFlagUrlActionCreator(flag))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cases);