import { Box, Heading } from "theme-ui";
import { ChordWithDuration } from "../../18th-century-europe/engraving";
import { ChordChart } from "./chord-chart/chord-chart";

export interface ChordListProps {
  chords: ChordWithDuration[];
}

export const ChordList: React.FC<ChordListProps> = ({ chords }) => {
  return (
    <Box>
      <Heading>Chords</Heading>
      <ChordChart chords={chords} />
    </Box>
  );
};
