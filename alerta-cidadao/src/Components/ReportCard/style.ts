import styled from "styled-components";

export const StyledReportCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 500px;
    width: 100%;
    padding: 10px;

    background-color: var(--color-grey-900);
    color: var(--color-grey-100);
    transition: 600ms;
    border-radius: var(--border-radius-default);
    cursor: pointer;
    border: 1px solid transparent;
    &&:hover {
        background-color: var(--color-grey-300);
        border: 1px solid var(--color-grey-0);
    }
    img{
        width: 300px;
        height: 350px;
    }
`;
