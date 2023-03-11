import styled from "styled-components";

export const StyledUserDashBoard = styled.div`
    margin-top: 12vh;

    max-width: 98vw;
    .btn-config{
        position: absolute;
        right: 0;
    }
    .visible{
        display: flex;
    }
    .hidden{
        display: none;
    }
    .container__user-dashboard-hidden{
        display: none;
    }
    .container__user-dashboard {
        background-color: var(--color-grey-900);
        position: absolute;
        top: 10.5vh;
        right: 0;
        width: 20rem;

        display: flex;
        flex-direction: column;

        font-family: var(--font-family);
        color: var(--color-grey-100);

        border-left: 1px solid var(--color-grey-500);
        
        h2{
            text-align: center;
            padding: 8px 0px;
        }
        button {
            background-color: transparent;
            border: none;

            font-size: var(--font-size-medium);
            color: var(--color-grey-100);

            padding: 1rem;
            transition: 500ms;
        }
        button:hover {
            background-color: var(--color-grey-500);
        }
    }
`;
