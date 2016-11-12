import { connect } from 'react-redux';
import Calculate from '../components/calculate.jsx';
import { calculate } from '../actions/actions.js';

// pass the store properties to the component 
const mapStateToProps = function (store) {
    const { calculate = {} } = store;
    const { result = '' } = calculate;

    return {
        result
    };
}

// attach the handlers
const mapDispatchToProps = (dispatch) => {
    return {
        calculate: (a, b) => {
            dispatch(calculate(a, b));
        }
    }
}

// create the component
var CalculateContainer = connect(mapStateToProps, mapDispatchToProps)(Calculate);

export default CalculateContainer;