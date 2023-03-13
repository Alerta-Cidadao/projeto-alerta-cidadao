import styled from "styled-components";

export const StyledHomePage = styled.main`
    display: flex;
    flex-direction: column;

    justify-content: center;

    padding-top: 12vh;

    width: fit-content;
    padding-left: 18px;
    padding-right: 18px;
    max-width:99vw;
    margin: 0 auto;

    form{
        display: flex;
        width: 100%;

        margin-bottom: 20px;
        button{
            background-color: transparent;
            border: none;
        }
    }
`;
