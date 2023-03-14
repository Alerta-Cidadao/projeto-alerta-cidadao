import styled from "styled-components";

export const StyledReportCard = styled.li`
    display: flex;
    gap: 15px;

    max-width: 500px;
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
    .userImage{
        width: 300px;
        height: 350px;
        margin-left: 90px;
    }
    .trashButton{
        width: 90px;
height: 60px;
    }
`;


