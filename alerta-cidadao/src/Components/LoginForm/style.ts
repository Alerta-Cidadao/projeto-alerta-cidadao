import styled from "styled-components";

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-width: 440px;
    max-height: 680px;

    padding: 10px;

    background-color: var(--color-300);

    button {
        width: 400px;
        height: 63px;

        background: var(--color-700);
        border: 0;
        border-radius: 25px;
    }
`;
