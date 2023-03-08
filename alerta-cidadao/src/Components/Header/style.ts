import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 10.5vh;
    padding: 0.6rem 5rem;
    
    background-color: var(--color-grey-900);
    font-family: var(--font-family);

    position: fixed;
    top: 0;
    z-index: 2;

    img {
        width: 5rem;
        cursor: pointer;
    }

    nav {
        display: flex;
        gap: 1rem;

        a {
            color: var(--color-grey-100);
            text-decoration: none;
            background-color: var(--color-primary);

            padding: 0.3rem 1.5rem;
            border-radius: 5px;
        }
        a:hover {
            background-color: var(--color-secondary);
            box-shadow: 0px 0px 10px var(--color-secondary);
        }
        button {
            border: none;
            color: var(--color-grey-100);
            text-decoration: none;
            background-color: var(--color-primary);

            padding: 0.3rem 1.5rem;
            border-radius: 5px;
        }
        button:hover {
            background-color: var(--color-secondary);
            box-shadow: 0px 0px 10px var(--color-secondary);
        }
    }
`;
