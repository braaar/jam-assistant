import { Outlet } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { Layout } from "./components/layout/layout";
import { theme } from "./theme";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Outlet></Outlet>
    </Layout>
  </ThemeProvider>
);
