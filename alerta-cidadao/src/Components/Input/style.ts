import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledInput = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledTextField = styled(TextField)`
    background-color: var(--color-grey-500);
    color: var(--color-grey-0);
    border-radius: 5px;
    .MuiOutlinedInput-notchedOutline {
        border-color: var(--color-grey-0);
    }
`;
