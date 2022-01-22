import { Badge, Box, Flex, Heading, Text } from "theme-ui";

export interface ChordListProps {
  chords: string[];
}

export const ChordList: React.FC<ChordListProps> = ({ chords }) => {
  return (
    <Box>
      <Heading>Chords</Heading>
      <Flex sx={{ flexWrap: "wrap", gap: 2 }}>
        {chords.map((chord) => (
          <Badge>
            <Text sx={{ fontWeight: "bold", fontSize: 6 }}>{chord}</Text>
          </Badge>
        ))}
      </Flex>
    </Box>
  );
};
