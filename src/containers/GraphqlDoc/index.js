import React from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';

import Wrapper from './Wrapper';

const GraphQLDoc = () => (
    <Wrapper>
        <NavLink to='/graphql/tutorial-1'>
            <div>tutorial-1</div>
        </NavLink>
        <NavLink to='/graphql/tutorial-2'>
            <div>tutorial-2</div>
        </NavLink>
    </Wrapper>
);

export default GraphQLDoc;
