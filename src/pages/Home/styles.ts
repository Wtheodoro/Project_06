import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    .btn {
        margin-top:5rem;
        display: flex;

        a {
            width: 15rem;
            height: 5rem;
            border-radius: 0.8rem;
            margin-right: 1.6rem;
            font-size: 2.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            background: #232323;
            color: #FFF;
            transition: 0.2s;
        }
    }
`;
