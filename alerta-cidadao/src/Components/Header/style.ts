import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 10.5vh;
    padding: 9px 80px;
    
    background-color: var(--color-grey-900);
    font-family: var(--font-family);

    position: fixed;
    top: 0;
    z-index: 1;
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
    .hamburger{
        display: none;
    }
    @media (max-width:767px) {
       justify-content: space-around;
        
       img {
        position: absolute;
        left: 3rem;
       }
        .hamburger{
            color: var(--color-grey-100);
            display: block;
            cursor: pointer;
            position: absolute;
            right: 3rem;
        }
        nav{
            flex-direction: column;
            background-color: var(--color-primary);
            gap: 0;

            position: absolute;
            right: 0px;
            top: 10.5vh;
            a{
                border-radius: 0;
            }
        }
        .visible{
            display: flex;
        }
        .hidden{
            display: none;
        }
    }
`;
