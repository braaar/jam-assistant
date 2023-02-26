import { Box, Button, Flex, Heading, Paragraph } from "theme-ui";

export const About = () => {
  return (
    <Box>
      <Heading>About</Heading>
      <Paragraph sx={{ margin: '0 0 1rem'}}>
        Jam Assistant is a free and open-source web app designed to help guitarists and musicians come up with new chord progressions and practice their improvisation skills. Our community of passionate developers and musicians believe that music is a universal language that should be accessible to everyone.
      </Paragraph>

      <Paragraph>
        We welcome contributions from anyone who wants to help us improve and expand Jam Assistant, whether you're an experienced programmer, a music teacher, or just someone who loves to jam. Thank you for using Jam Assistant, and happy jamming!
      </Paragraph>
    </Box>
  );
};
