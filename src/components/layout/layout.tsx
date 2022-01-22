/** @jsxImportSource theme-ui */
import { Box, Container, Flex } from "theme-ui";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Flex sx={{ flexDirection: "column", minHeight: "100vh", gap: 3 }}>
        <Box>
          <Header />
        </Box>
        <Container sx={{ flex: "1 1 auto" }}>{children}</Container>

        <Box>
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
};
