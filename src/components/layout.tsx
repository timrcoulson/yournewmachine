import * as React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const defaultTheme = {}

export default ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <React.Fragment>
      <GlobalStyle />
    </React.Fragment>
    {children}
  </ThemeProvider>
)
