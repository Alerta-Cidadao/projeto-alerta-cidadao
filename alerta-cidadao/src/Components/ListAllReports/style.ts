import styled from "styled-components";

export const StyledListAllReports = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: var(--color-grey-700-opacity);
    max-width: 450px;
    padding: 1rem;

    @media (min-width:1028px) {
        form{
            display: none;
        }
    }
`;
