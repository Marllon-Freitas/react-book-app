import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
      --primary: ${(props) => props.theme.colors.primary};
      --secundary: ${(props) => props.theme.colors.secondary};
      --background: ${(props) => props.theme.colors.background};
      --text: ${(props) => props.theme.colors.text};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background: var(--primary);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
