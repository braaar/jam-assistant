import { Box } from "theme-ui";
import { Bar } from "./bar";
import { ChordSymbol } from "./chord-symbol";

export interface ChartLineProps {
  chords: string[];
}

export const ChartLine: React.FC<ChartLineProps> = ({ chords }) => (
  <>
    <Box sx={{ bg: "#000000", borderRadius: 2 }} />
    <Bar>
      <ChordSymbol chord={chords[0]} />
    </Bar>
    <Box sx={{ bg: "#000000", borderRadius: 2 }} />
    <Bar>
      <ChordSymbol chord={chords[1]} />
    </Bar>
    <Box sx={{ bg: "#000000", borderRadius: 2 }} />
    <Bar>
      <ChordSymbol chord={chords[2]} />
    </Bar>
    <Box sx={{ bg: "#000000", borderRadius: 2 }} />
    <Bar>
      <ChordSymbol chord={chords[3]} />
    </Bar>
    <Box sx={{ bg: "#000000", borderRadius: 2 }} />
  </>
);
