import styled from "styled-components";

export const StyledInput = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        height: 61px;

        background-color: var(--color-500);
        border: 0;
        border-radius: 25px;
    }
`;
