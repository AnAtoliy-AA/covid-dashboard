import CountryLevel from './CountryLevel'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        global: state.table.global,
        country: state.cases.country,
        population: state.cases.population,
        flag: state.cases.flag,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryLevel);