const initialState = { footer: 'footer' };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'test': {
            state.setState({
                footer: 'case operated',
            });
            break;
        }
        default:
            return state;
    }
};
