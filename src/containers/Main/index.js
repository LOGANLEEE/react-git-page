import React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from './Wrapper';

const Main = () => (
    <Wrapper>
        <ul>
            <li>
                <NavLink className='item1' to='/moive'>
                    <div>Movie</div>
                </NavLink>
            </li>
            <li>
                <NavLink to='/shopping' className='item2'>
                    <div>Shopping</div>
                </NavLink>
            </li>
            <li>
                <NavLink className='item3' to='/graphql'>
                    <div>GraphQL</div>
                </NavLink>
            </li>
        </ul>
    </Wrapper>
);

export default Main;
