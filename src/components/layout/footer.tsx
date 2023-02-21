/** @jsxImportSource theme-ui */
import { Box, Container, Paragraph, Link } from "theme-ui";

export const Footer: React.FC = () => (
  <Box sx={{ background: "primary", color: "white", textAlign: "center"}}>
    <Container>
      <Paragraph variant="text.tinyHeading">This is an open source project <Link href="https://github.com/braaar/jam-assistant" sx={{ textDecoration: "none"}}>🔗</Link> under GPL-3.0 license</Paragraph> 
    </Container>
  </Box>
);
