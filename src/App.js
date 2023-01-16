import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//pages
import Pages from "./Pages";

//globalStyles
import { GlobalStyles } from "./styles/GlobalStyles";
// import darkTheme from "./styles/themes/dark";
import lightTheme from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
