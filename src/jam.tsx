import React, { useState } from "react";
import { Box, Button, Flex, Heading, Paragraph } from "theme-ui";
import { ChordList } from "./components/chord-list";
import { getNewChord } from "./services/chord-helpers";

export const Jam: React.FC = () => {
  const [chords, setChords] = useState<string[]>([]);

  const addChord = () => {
    const newChord = getNewChord(chords);

    const newList = [...chords, newChord];
    setChords(newList);
  };

  const undoChord = () => {
    setChords(chords.slice(0, -1));
  };

  const resetChords = () => {
    setChords([]);
  };
  return (
    <Box>
      <Heading>Let's Jam</Heading>
      <Paragraph>
        <Flex sx={{ gap: 2 }}>
          <Button onClick={addChord}>Hit me!</Button>
          <Button onClick={undoChord}>Undo</Button>
          <Button onClick={resetChords}>Reset</Button>
        </Flex>
      </Paragraph>
      <ChordList chords={chords} />
    </Box>
  );
};
