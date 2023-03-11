import styled from "styled-components";

export const StyledSearchForm = styled.form`
    position: relative;
    align-self: center;
    margin: 0 10px;
    min-width: 50%;

    input {
        padding-right: 55px;
    }

    button {
        position: absolute;
        background-color: transparent;
        border: none;

        top: 13px;
        right: 13px;
    }
`;
