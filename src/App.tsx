import React from "react";
import { ThemeProvider } from "theme-ui";
import { Layout } from "./components/layout/layout";
import { Jam } from "./jam";
import { theme } from "./theme";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Jam />
    </Layout>
  </ThemeProvider>
);
