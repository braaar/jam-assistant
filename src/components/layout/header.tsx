import { Flex, Box, Container, Heading } from "theme-ui";
import { Link } from "react-router-dom";

export const Header = () => (
  <Box sx={{ background: "secondary" }}>
    {/* <Container>
      <Heading>Jam assistant</Heading>
    </Container> */}

    <Container>
    <Flex sx={{ alignItems: 'baseline', gap: '1rem'}}>
      <Link to={'/jam-assistant'} style={{ textDecoration: 'none' }}>
        <Heading>Jam assistant</Heading>
      </Link>
      <Link to={'about'} style={{ textDecoration: 'none' }}>
        <Heading variant="text.mediumHeading" sx={{ paddingY: '1rem'}}>About</Heading>
      </Link>
    </Flex>
    </Container>
  </Box>
);
