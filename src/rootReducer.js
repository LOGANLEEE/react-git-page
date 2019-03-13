import { combineReducers } from 'redux';

import BodyReducer from './containers/Body/reducer';
import HeaderReducer from './containers/Header/reducer';
import FooterReducer from './containers/Footer/reducer';

const rootReducer = combineReducers({
    BodyReducer: BodyReducer,
    FooterReducer: FooterReducer,
    HeaderReducer: HeaderReducer,
});

export default rootReducer;
