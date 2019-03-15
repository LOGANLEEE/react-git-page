import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Moive from './containers/Moive';
import Shopping from './containers/Shopping';
import Main from './containers/Main';
import GraphqlDoc from './containers/GraphqlDoc';
import tutorial1 from './components/GraphqlDocPage/tutorial1';
import tutorial2 from './components/GraphqlDocPage/tutorial2';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/react-git-page/' component={Main} />
                <Route exact path='/' component={Main} />
                <Route exact path='/moive' component={Moive} />
                <Route exact path='/shopping' component={Shopping} />
                {/* ↓↓↓ GraphQL + Node Doc ↓↓↓ */}
                <Route exact path='/graphql' component={GraphqlDoc} />
                <Route exact path='/graphql/tutorial-1' component={tutorial1} />
                <Route exact path='/graphql/tutorial-2' component={tutorial2} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
