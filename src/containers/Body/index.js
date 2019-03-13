import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { css } from '@emotion/core';

import { ClipLoader } from 'react-spinners';

import * as action from './action';
import * as actionTypes from './actionTypes';

import ContentRenderer from 'components/ContentRenderer';
import ErrorPage from 'components/ErrorPage';
import Wrapper from './Wrapper';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FetchedData: {},
            Fetched: false,
            loading: false,
            totalValue: {},
            Error: false,
        };

        this.fetchingMovieData = this.fetchingMovieData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchKeyword.length > 0) {
            this.fetchingMovieData();
        }
    }

    fetchingMovieData() {
        const { url, apiKey, language } = this.props;
        const { searchKeyword } = this.props;
        this.setState({
            loading: true,
        });

        axios
            .get(
                searchKeyword.length > 1
                    ? `${url}?api_key=${apiKey}&language=${language}&query=${searchKeyword}`
                    : `${url}?api_key=${apiKey}&language=${language}&query=''`,
            )
            .then((res) => {
                console.log('res => ', res);
                this.setState(() => ({
                    totalValue: res,
                }));
                return res.data;
            })
            // .then((data) => (result = data))
            .then((data) =>
                this.setState(() => ({
                    FetchedData: data,
                    Fetched: true,
                    loading: false,
                    Error: false,
                })),
            )
            .catch((err) => {
                this.setState(() => ({
                    Error: true,
                }));
                return err;
            });
    }

    render() {
        return (
            <Wrapper>
                <div>
                    {this.state.Fetched && (
                        <ContentRenderer data={this.state.FetchedData} />
                    )}
                </div>

                <div>{this.state.loading && <ClipLoader />}</div>
                <div>{this.state.Error && <ErrorPage />} </div>
            </Wrapper>
        );
    }
}

Body.propTypes = {
    Fetching: PropTypes.func,
    apiKey: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    searchKeyword: PropTypes.string,
};
Body.defaultProps = { searchKeyword: '' };

const mapStateToProps = (state) => ({
    apiKey: state.BodyReducer.apiKey,
    language: state.BodyReducer.language,
    url: state.BodyReducer.url,
    searchKeyword: state.HeaderReducer.searchKeyword,
});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Body);
