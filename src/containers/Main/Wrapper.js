import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: black;
    color: white;
    display: grid;
    padding: 10px;

    a {
        text-decoration: none;
    }
    a > div {
        color: red;
    }

    li {
        font-size: 32px;
        padding: 10px;
    }

    .item1 {
        grid-column: 1;
        grid-row: 1;
    }
    .item2 {
        grid-column: 1;
        grid-row: 2;
    }
    .item3 {
        grid-column: 1;
        grid-row: 3;
    }
`;

export default Wrapper;
