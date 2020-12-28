import ListCountry from './ListCountry';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        countryInfoList: state.countryList.countryInfoList,
        activeCountry: state.countryList.activeCountry,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCountry);