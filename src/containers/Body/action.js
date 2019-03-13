import axios from 'axios';
import store from 'store';

import * as actionTypes from './actionTypes';

const apiKey = '54087469444eb8377d671f67b1b8595d';
const language = 'en-US';
const url = 'https://api.themoviedb.org/3/search/movie';
const keyword = 'avengers';

export const FetchSuccess = (value) => ({
    type: actionTypes.FETCHING_SUCCESS,
    value: value,
});

export const FetchFailed = (value) => ({
    type: actionTypes.FETCHING_FAILED,
    message: value,
});

export const FetchingMovieData = () => ({
    type: actionTypes.FETCHING_MOVIE_DATA,
    payload: 'defaultPayload',
});
// todo fetching data by action.

// const apiKey = '54087469444eb8377d671f67b1b8595d';
// const language = 'en-US';
// const url = 'https://api.themoviedb.org/3/search/movie';
// const keyword = 'avengers';

// export const createPost = ({ title, body }) => {
//     return (dispatch) => {
//         return axios
//             .post(`${apiUrl}/add`, { title, body })
//             .then((response) => {
//                 dispatch(createPostSuccess(response.data));
//             })
//             .catch((error) => {
//                 throw error;
//             });
//     };
// };

// export const FetchingMovieData = (payload) => ({
//     type: actionTypes.FETCHING_MOVIE_DATA,
//     payload: payload,
// });
