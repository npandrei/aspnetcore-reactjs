import { post } from '../../utils/utils.js';

export function calculate(a, b) {
    return (dispatch) => {
        // send a request to compute sum server side
        post('/Home/Calculate', { a, b }).done((response) => {
            // got the sum from server
            dispatch(resultCalculated(response.result));
        });
    }
}

export function resultCalculated(result) {
    return {
        type : 'result-calculated',
        result
    }
}