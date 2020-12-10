import Header from './Header'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        global: state.cases.global,
        country: state.cases.country,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);