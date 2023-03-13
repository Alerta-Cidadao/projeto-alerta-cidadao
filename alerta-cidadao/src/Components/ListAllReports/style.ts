import styled from "styled-components";

export const StyledListAllReports = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
<<<<<<< HEAD
    background-color: var(--color-grey-700);
    width: 100%;
    min-width: 280px;
=======

    background-color: var(--color-grey-700-opacity);
    max-width: 450px;
>>>>>>> 5193eddfa268ebffe53918b379498a5b50993501
    padding: 1rem;

    h1{
        font-family: var(--font-family);
        color: var(--color-grey-100);
        font-weight: var(--font-weight-regular);
    }
    @media (min-width:1028px) {
        form{
            display: none;
        }
    }
`;
