import { Box, Heading } from "theme-ui";
import { ChordChart } from "./chord-chart/chord-chart";

export interface ChordListProps {
  chords: string[];
}

export const ChordList: React.FC<ChordListProps> = ({ chords }) => {
  return (
    <Box>
      <Heading>Chords</Heading>
      <ChordChart chords={chords} />
    </Box>
  );
};
