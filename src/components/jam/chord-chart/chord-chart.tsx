import { Grid } from "theme-ui";
import { ChordWithDuration } from "../../../18th-century-europe/engraving";
import { ChartLine } from "./chart-line";

export interface ChordChartProps {
  chords: ChordWithDuration[];
}

/** Split a list of chords in two; the first number of chords that fit within the specified duration, and the rest */
export const splitChordsByDuration = (
  chords: ChordWithDuration[],
  duration: number
) => {
  const durationChords: ChordWithDuration[] = [];
  const restChords: ChordWithDuration[] = [];

  let sum = 0;

  chords.forEach((chord) => {
    if (sum + chord.duration > duration) {
      restChords.push(chord);
    } else {
      durationChords.push(chord);
      sum += chord.duration;
    }
  });
  return { lineChords: durationChords, restChords };
};

/** Divides chords in a nested list where each sublist has a max length (number of beats)
 * @param chords a list of chords
 * @param lengthOfDivision the max length if each sublist
 * @returns a list of lists of chords
 */
export const divideChordsIntoLists = (
  chords: ChordWithDuration[],
  lengthOfDivision: number
) => {
  const chordsInLines: ChordWithDuration[][] = [];

  let restOfChords = [...chords];

  while (restOfChords.length > 0) {
    const { lineChords, restChords } = splitChordsByDuration(
      restOfChords,
      lengthOfDivision
    );
    chordsInLines.push(lineChords);

    restOfChords = restChords;
  }

  return chordsInLines;
};
export const ChordChart: React.FC<ChordChartProps> = ({ chords }) => {
  const chordsInLines = divideChordsIntoLists(chords, 16.0);
  return (
    <Grid
      columns={[
        "1fr 30fr 1fr 30fr 1fr 30fr 1fr 30fr 1fr",
        "1fr 70fr 1fr 70fr 1fr 70fr 1fr 70fr 1fr",
      ]}
      sx={{ gap: 1 }}
    >
      {chordsInLines.map((chords, index) => (
        <ChartLine chords={chords} key={index} />
      ))}
    </Grid>
  );
};
