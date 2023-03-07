import styled from "styled-components";

export const StyledReportCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 440px;

    padding: 10px;

    background-color: var(--color-500);

    cursor: pointer;

    &&:hover {
        background-color: var(--color-700);
    }
`;
