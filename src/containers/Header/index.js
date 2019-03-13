import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Wrapper from './Wrapper';
import * as action from './action';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchKeyword: '' };

        this.SearchOnChangeHandler = this.SearchOnChangeHandler.bind(this);
    }

    SearchOnChangeHandler(e) {
        this.setState(
            {
                searchKeyword: e.target.value,
            },
            () => this.props.searchInputChanger(this.state.searchKeyword),
        );
    }
    render() {
        console.log('£££ HEADER');

        return (
            <Wrapper>
                <p className='title'>
                    <b>React(Redux) Movie Crawler</b>
                </p>

                <div className='search'>
                    <input
                        type='text'
                        placeholder='Type Name of Moive ! :D'
                        value={this.state.searchKeyword}
                        onChange={(e) => this.SearchOnChangeHandler(e)}
                    />
                </div>
            </Wrapper>
        );
    }
}

Header.propTypes = {
    searchInputChanger: PropTypes.func,
    searchKeyword: PropTypes.string,
};
Header.defaultProps = {
    searchKeyword: '',
};

const mapStateToProps = (state) => ({
    url: state.HeaderReducer.searchKeyword,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    searchInputChanger: (value) => dispatch(action.searchInputChanger(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
