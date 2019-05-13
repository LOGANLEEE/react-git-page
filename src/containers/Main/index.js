import React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from './Wrapper';

function searchKeyDown(e) {
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
        window.location = `https://www.google.com/search?rls=en&ie=UTF-8&oe=UTF-8&q=${e.target.value}`;
    }
}

const Main = () => (
    <Wrapper>
        <div>
            <input
                placeholder='Type your keyword'
                onKeyDown={(e) => searchKeyDown(e)}
            />
        </div>
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
