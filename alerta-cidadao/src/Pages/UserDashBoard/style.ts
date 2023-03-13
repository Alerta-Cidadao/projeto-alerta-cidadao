import styled from "styled-components";

export const StyledUserDashBoard = styled.div`
    margin-top: 12vh;

    max-width: 98vw;
    
    .btn-config{
        position: absolute;
        right: 20px;
        top: 3.8vh;
        z-index: 2;

        background-color: transparent;
        border: none;
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
        
        
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-grey-700-opacity);
  
        h2{
            text-align: center;
            padding: 8px 0px;
        }
        a, button{
            text-decoration: none;
            background-color: transparent;
            border: none;

            font-size: var(--font-size-medium);
            color: var(--color-grey-100);

            padding: 1rem;
            transition: 500ms;
            text-align: center;
        }
        a:hover {
            background-color: var(--color-grey-500);
        }
        button:hover {
            background-color: var(--color-grey-500);
        }
    }
    .content-dashboard{
        position: relative;

        display: flex;
        flex-direction: column;

        font-family: var(--font-family);
        color: var(--color-grey-100);
        width: fit-content;
        padding: 1rem;

        background-color: var(--color-grey-900);

        .close-modal{
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
        }
    }
`;
