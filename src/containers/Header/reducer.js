import * as actionTypes from './actionTypes';

const initialState = { header: 'header', searchKeyword: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'test': {
            return {
                header: 'case operated',
            };
        }

        case actionTypes.SEARCH_INPUT_CHANGER: {
            const { value } = action;
            return {
                ...state,
                searchKeyword: value,
            };
        }
        default:
            return state;
    }
};
