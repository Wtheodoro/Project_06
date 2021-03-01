import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.8rem;
    border-bottom: 1px solid #131313;
    border-top: 1px solid #131313;
    background: #232323;

    .add_type {
        width: 3.5rem;
        border: 1px solid #131313;
        height: 2.7rem;
        font-size: 1.2rem;
        background: #fff;
        margin-right: 0.6rem;
        transition: border 0.25s;
    }

    .add_description,
    .add_value {
        border: 1px solid #131313;
        background: #fff;
        font-size: 0.9rem;
        padding: 0.8rem 0.9rem;
        margin-right: 0.6rem;
        border-radius: 5px;
        transition: border 0.3s
    }

    .add_description { width: 25rem}
    .add_value { width: 6.25rem}

    .add_btn {
        font-size: 2.2rem;
        background: none;
        color: #28B9B5;
        cursor: pointer;
        margin-left: 0.6px;

        &:active { transform: translateY(2px)}
        &:focus { outline: none }
    }

    .add_type:focus,
    .add_description:focus,
    .add_value:focus {
        outline: none;
        border: 1px solid #28B9B5;
    }
`;
