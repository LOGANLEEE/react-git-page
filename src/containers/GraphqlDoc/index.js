import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import tutorial1 from '../../components/GraphqlDocPage/tutorial1';
import Wrapper from './Wrapper';

const GraphQLDoc = () => (
    <Wrapper>
        <BrowserRouter basename='/graphql' />
        <NavLink to='/tutorial-1'>
            <div>tutorial-1</div>
        </NavLink>
        <Route exact path='/tutorial-1' component={tutorial1} />
    </Wrapper>
);

export default GraphQLDoc;
