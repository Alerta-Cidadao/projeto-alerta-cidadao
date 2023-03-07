import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 102px;

    border-bottom: 2px solid black;

    background-color: var(--color--100);

    img {
        width: 5rem;
        cursor: pointer;
    }

    nav {
        display: flex;
        gap: 1rem;

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;

            width: 100px;
            height: 48px;

            background-color: #cff3d5;
            border-radius: 25px;
        }
    }
`;
