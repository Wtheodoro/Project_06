import styled from 'styled-components';

interface ContainerProps {
    backgroundColor: string
}

export const Container = styled.div<ContainerProps>`
    padding: 0.8rem;
    text-transform: uppercase;
    background: ${(props) => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30rem;
    margin-bottom: 0.8rem;

    .text {
        font-size: 0.8rem;
        color: #444;
    }

    .value {
        font-size: 1.8rem;
    }
`;
