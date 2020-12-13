import CountryDeaths from './CountryDeaths';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        global: state.table.global,
        country: state.cases.country,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDeaths);