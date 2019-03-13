import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: black;
    color: white;
    display: grid;

    a {
        text-decoration: none;
    }
    a > div {
        color: red;
    }

    .item1 {
        grid-column: 1;
        grid-row: 1;
    }
    .item2 {
        grid-column: 1;
        grid-row: 2;
    }
`;

export default Wrapper;
