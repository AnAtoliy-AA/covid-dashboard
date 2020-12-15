import GlobalCases from './GlobalCases';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        worldWideData: state.countryList.worldWideData,
        activeCountry: state.countryList.activeCountry,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalCases);