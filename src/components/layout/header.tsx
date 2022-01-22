import { Box, Container, Heading } from "theme-ui";

export const Header = () => (
  <Box sx={{ background: "secondary" }}>
    <Container sx={{ maxWidth: ["100%", "80%", "60%"] }}>
      <Heading>Jam assistant</Heading>
    </Container>
  </Box>
);
