import { Text, ThemeUIStyleObject } from "theme-ui";

export interface ChordSymbolProps {
  chord: string;
  sx?: ThemeUIStyleObject;
}
export const ChordSymbol: React.FC<ChordSymbolProps> = ({ chord, sx }) => {
  return <Text sx={{ fontWeight: "bold", fontSize: 5, ...sx }}>{chord}</Text>;
};
