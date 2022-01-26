import { Badge, Box, Grid, Text } from "theme-ui";
import { Bar } from "./bar";
import { ChartLine } from "./chart-line";
import { ChordSymbol } from "./chord-symbol";

export interface ChordChartProps {
  chords: string[];
}

export const ChordChart: React.FC<ChordChartProps> = ({ chords }) => {
  // determine how many lines we need by countin the amount of chords and comparing with multiples of four
  // if 9 chords, we want three lines, if 1 chords, we want 1 line
  const lines = Math.ceil(chords.length / 4.0);

  // for each line, make an array with four of the strings from the chord array
  const chordsInLines: string[][] = [];
  for (let i = 0; i < lines; i++) {
    chordsInLines.push([
      chords[0 + i * 4],
      chords[1 + i * 4],
      chords[2 + i * 4],
      chords[3 + i * 4],
    ]);
  }

  return (
    <Grid columns={"1fr 50fr 1fr 50fr 1fr 50fr 1fr 50fr 1fr"}>
      {chordsInLines.map((chords) => (
        <ChartLine chords={chords} />
      ))}
    </Grid>
  );
};
