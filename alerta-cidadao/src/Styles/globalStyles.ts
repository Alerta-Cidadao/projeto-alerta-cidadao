import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative:#59323F;
        --color-secondary:#EB5757;
        --color-grey-4:  #121214; 
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1:#868E96;
        --color-grey-0:#F8F9FA;
        --color-negative:#E83F5B;
        --color-warning:#FFCD07;
        --color-succes:#3FE864;
        --color-information:#155BCB;
        --radius-default: 0.5rem;
        
        --font-family: "Inter", sans-serif;
    
        --font-size-big:1.125rem;
        --font-size-medium:1rem;
        --font-size-regular:  0.875rem;
        --font-size-small:  0.75rem;
        --font-weight-light:200;
        --font-weight-regular:300;
        --font-weight-medium:600;
        --font-weight-bold:800;
    }
    `;