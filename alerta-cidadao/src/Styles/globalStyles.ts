import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-900: #9EE7AB;
        --color-700: #B6EDC0;
        --color-500: #CFF3D5;
        --color-300: #E7F9EA;
        --color-100: #FFFFFF;
    
        --color-grey-900:  #121214; 
        --color-grey-700: #212529;
        --color-grey-500: #343B41;
        --color-grey-300:#868E96;
        --color-grey-100:#F8F9FA;

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