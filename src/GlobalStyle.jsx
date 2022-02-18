import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;

    @media (max-width: 1900px) {
        overflow-x: auto;
    }
  }
`;

export default GlobalStyle;