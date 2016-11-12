import { Route, IndexRoute } from 'react-router';
import { configureApp } from '../utils/utils.js';

import reducer from './reducers/demo.js';
import AppContainer from './containers/app.js';
import CalculateContainer from './containers/calculate.js';

configureApp(
    'home-index',
    () => (
            <Route path={`(/)`} component={AppContainer}>
                <Route path={`calculate(/)`} component={CalculateContainer} />
            </Route>
        )
    ,
    reducer);
