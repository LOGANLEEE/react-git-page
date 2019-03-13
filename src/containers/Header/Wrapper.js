import styled from 'styled-components';
import avengers2 from 'images/avengers2.png';

const Wrapper = styled.div`
    /* color: #ffa500; */
    background: black no-repeat center fixed;
    height: 120px;
    width: 100%;
    background-size: cover;
    display: grid;

    .title {
        color: #00e7ff;
        text-align: center;
        margin: 0px;
        padding: 5px;
        font-size: 30px;
        vertical-align: bottom;
        text-shadow: 2px 2px red;
        grid-column: 1;
        grid-row: 1;
        height: 100%;
    }

    .search {
        grid-column: 1;
        grid-row: 3;
        input {
            width: 100%;
            height: 100%;
        }
    }
`;

export default Wrapper;
