import * as actionTypes from './actionTypes';

export const searchInputChanger = (value) => ({
    type: actionTypes.SEARCH_INPUT_CHANGER,
    value: value,
});

export const sample = (sample) => ({
    type: 'sample',
    value: sample,
});
