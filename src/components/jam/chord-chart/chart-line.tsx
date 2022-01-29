import { Box } from "theme-ui";
import { ChordWithDuration } from "../../../18th-century-europe/engraving";
import { Bar } from "./bar";
import { divideChordsIntoLists } from "./chord-chart";

export interface ChartLineProps {
  chords: ChordWithDuration[];
}

export const ChartLine: React.FC<ChartLineProps> = ({ chords }) => {
  // do stuff based on duration

  const chordsInBars = divideChordsIntoLists(chords, 4.0);

  return (
    <>
      <Box sx={{ bg: "#000000", borderRadius: 2 }} />
      <Bar chords={chordsInBars[0]} />
      <Box sx={{ bg: "#000000", borderRadius: 2 }} />
      <Bar chords={chordsInBars[1]} />
      <Box sx={{ bg: "#000000", borderRadius: 2 }} />
      <Bar chords={chordsInBars[2]} />
      <Box sx={{ bg: "#000000", borderRadius: 2 }} />
      <Bar chords={chordsInBars[3]} />
      <Box sx={{ bg: "#000000", borderRadius: 2 }} />
    </>
  );
};
