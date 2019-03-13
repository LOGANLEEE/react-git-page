import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    border: 2px #4e4b4b solid;
    text-align: center;
    background: url(${(props) => props.backdrop}) no-repeat center fixed;
    background-size: cover;

    margin: 10px;
    padding: 10px;

    grid-template-columns: auto 1fl 1fr 1fr 1fr;
    grid-template-rows: auto;

    ::before {
        filter: grayscale(50%);
    }

    .mg {
        margin: 10px;
        padding: 10px;
    }

    /* ===============  row 1 ===============  */

    .poster {
        /* poster_path */
        grid-column: 1/2;
        grid-row: 1/6;
    }

    /* =============== row 2  =============== */

    .vote_average {
        grid-column: 3;
        grid-row: 2;
        width: 20%;
    }

    .title {
        /* title */
        grid-column: 4;
        grid-row: 2;
    }

    .popularity {
        grid-column: 5;
        grid-row: 2;
    }
    /* =============== row 3 ===============  */

    .overview {
        grid-column: 3/5;
        grid-row: 3;
        background-color: #4c4c4cde;
    }
    .original_language {
        grid-column: 5;
        grid-row: 3;
    }
    /* =============== row 4 ===============  */
    .adult {
        grid-column: 3;
        grid-row: 4;
    }

    .video {
        grid-column: 4;
        grid-row: 4;
    }

    /* =============== row 5 ===============  */
`;

export default Wrapper;
