export function calculateReducer(state = { result: '' }, action) {
    switch (action.type) {
        case 'result-calculated' : {
            return Object.assign({}, state, { result: action.result });
        }
    }

    return state;
}