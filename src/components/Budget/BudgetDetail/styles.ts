import styled from 'styled-components';

export const Container = styled.div`
    width: 40rem;
    margin: 3.8rem auto;
    background: #232323;
    border-radius: 5px;

    h2 {
        text-transform: uppercase;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .income_title { color: #28B9B5;}
    .expenses_title { color: #ff5049;}

    .item {
        padding: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .right {
        display: flex;
        align-items: center;
    }

    .item:first-child { border-top: 1px solid #131313;}

    .item:nth-child(even) { background: red; }

    .item_value {
        transition: transform 0.25s;
    }

    .income .item_value,
    .income .item_delete_btn {
        color: #28B9B5;
    }

    .expenses .item_value,
    .expenses .item_delete_btn {
        color: #ff5049;
    }

    .item_delete_btn {
        font-size: 1.3rem;
        background: none;
        cursor: pointer;
        display: none;
        vertical-align: middle;
        line-height: 1;
        border: none;
    }

    .item_delete_btn:focus { outline: none; }
    .item_delete_btn:active { transform: translateY(2px)
    }

    .item:hover .item_delete_btn { display: block; }
    .item:hover .item_value { transform: translateX(-1.2rem)}
`;
