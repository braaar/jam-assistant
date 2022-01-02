import React from "react";
import { ThemeProvider } from "theme-ui";
import { Text } from "theme-ui";
import { theme } from "./theme";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Text>Hello there!</Text>
  </ThemeProvider>
);
