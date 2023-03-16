import styled from "styled-components";

export const StyledReportCard = styled.li`
    display: flex;
    gap: 15px;

    width: 100%;
    padding: 10px;

    background-color: var(--color-grey-900);
    color: var(--color-grey-100);
    transition: 600ms;
    border-radius: var(--border-radius-default);
    border: 1px solid transparent;
    
    .report-description{
        display: inline;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        
        width: 90%;

        cursor: pointer;
    }

    &&:hover {
        background-color: var(--color-grey-300);
        border: 1px solid var(--color-grey-0);
    }

    .trashButton{
        cursor: pointer;
    }

    .userImage {
        width: 90%;
    }
`;
