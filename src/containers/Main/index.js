import React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from './Wrapper';

const Main = () => (
    <Wrapper>
        <NavLink className='item1' to='/moive'>
            <div>Movie</div>
        </NavLink>
        <NavLink to='/shopping' className='item2'>
            <div>Shopping</div>
        </NavLink>
    </Wrapper>
);

export default Main;
