import { Select } from "@mui/material";
import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .select-location {
        display: flex;
        gap: 1rem;
    }
`;

export const StyledSelect = styled(Select)`

background-color: var(--color-grey-500);
color: black;
.MuiOutlinedInput-notchedOutline{
    border-color:var(--color-grey-0) ;
}

`
