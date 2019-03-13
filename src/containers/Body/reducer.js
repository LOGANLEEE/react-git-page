import * as actionTypes from './actionTypes';

const initialState = {
    body: 'body',
    apiKey: '54087469444eb8377d671f67b1b8595d',
    language: 'en-US',
    url: 'https://api.themoviedb.org/3/search/movie',
    fetchedData: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_MOVIE_DATA: {
            const { payload } = action;
            console.log('payload:', payload);
            return { ...state, fetchedData: payload };
        }
        default:
            return state;
    }
};

export default reducer;
