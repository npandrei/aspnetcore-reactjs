import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

class Calculate extends React.Component {
    constructor() {
        super();
        this.state = { a: 0, b: 0, timeoutId: 0 };
    }

    componentDidMount() {
        // load result from server
        // can be replaced with loading some usefull info, like some grid data
        this.loadResult();
    }

    loadResult(p = {}) {
        const { calculate } = this.props; 
        // cancel any previous request
        if (this.state.timeoutId) {
            clearTimeout(this.state.timeoutId);
        }

        // a delay before calculating
        const timeoutId = setTimeout(() => {
            calculate(this.state.a, this.state.b);
        }, 500);

        // set the state
        this.setState(Object.assign({}, this.state, { timeoutId }, p));
    }  

    render() {
        const { result } = this.props; 

        return (<div className="container">
            <h1>Calculate sum server-side</h1>
            <div className="col-xs-12">
                <div className="form-group">
                    <label className="control-label">Fist value:</label>
                    <input type="number" className="form-control" value={this.state.a} onChange={ (event) => {
                        this.loadResult({ a: parseFloat(event.target.value) });
                    }} />
                </div>
            </div>
            <div className="col-xs-12">
                <div className="form-group">
                    <label className="control-label">Second value:</label>
                    <input type="number" className="form-control" value={this.state.b} onChange={ (event) => {
                        this.loadResult({ b: parseFloat(event.target.value) });
                    }} />
                </div>
            </div>
            <div className="col-xs-12">
                <div className="form-group">
                    <p>
                        Sum: {result}
                    </p>
                </div>
            </div>
        </div>);
    }
}

Calculate.propTypes = {
    calculate: PropTypes.func.isRequired,
    result: PropTypes.string.isRequired
}

export default Calculate;