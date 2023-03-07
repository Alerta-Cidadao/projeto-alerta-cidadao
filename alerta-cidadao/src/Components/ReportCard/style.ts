import styled from "styled-components";

export const StyledReportCard = styled.li`
    list-style: none;
    background-color: grey;
    border-radius: 5px;
    padding: 0.5rem;
    width: 40rem;
    max-width: 100%;

    cursor: pointer;

    &&:hover{
        filter: brightness(1.1);
        box-shadow: 0px 0px 10px var(--color-grey-1);
    }
`