import { createGlobalStyle } from "styled-components";

export const Index = createGlobalStyle`
        body{
          background: url(../../../src/assets/bcg-city.webp) no-repeat;
          background-position: center;
          background-size: cover;
          background-attachment: fixed ;

          background-color: linear-gradient(90deg, hsla(240, 5%, 7%, 1) 0%, hsla(208, 11%, 23%, 1) 100%);
        }
`;
