import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    .content {
        display: flex;
    }

    .list {
        width: 50rem;
        margin-left: 5rem;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .detail {
        display: flex;
        align-items: center;
        margin-left: 10rem;
    }
`;
