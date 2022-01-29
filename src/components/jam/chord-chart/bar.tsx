import { Box, Grid } from "theme-ui";
import { ChordWithDuration } from "../../../18th-century-europe/engraving";
import { ChordSymbol } from "./chord-symbol";
export interface BarProps {
  chords?: ChordWithDuration[];
}
export const Bar: React.FC<BarProps> = ({ chords = [] }) => {
  return (
    <Grid columns={4}>
      {chords.map((chord, index) => (
        <Box
          key={index}
          sx={{
            gridColumnEnd: `span ${chord.duration}`,
          }}
        >
          <ChordSymbol chord={chord.symbol}></ChordSymbol>
        </Box>
      ))}
    </Grid>
  );
};
