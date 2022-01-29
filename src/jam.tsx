import React, { useState } from "react";
import { Box, Button, Flex, Heading, Paragraph } from "theme-ui";
import { ChordWithDuration } from "./18th-century-europe/engraving";
import { Mode } from "./18th-century-europe/mode";
import { Note21 } from "./18th-century-europe/note";
import { ChordList } from "./components/jam/chord-list";
import { KeyCenterSelector } from "./components/jam/key-center-selector";
import { ModeSelector } from "./components/jam/mode-selector";
import { getNewChordWithinKey, randomInteger } from "./services/chord-helpers";

export const Jam: React.FC = () => {
  const [chords, setChords] = useState<ChordWithDuration[]>([]);
  const [mode, setMode] = useState<Mode>(Mode.IONIAN);
  const [keyCenter, setKeyCenter] = useState<Note21>(Note21.C_NATURAL);

  const addChord = () => {
    const newChord = getNewChordWithinKey(mode, keyCenter);

    const withDuration = { symbol: newChord, duration: randomInteger(1, 4) };
    const newList = [...chords, withDuration];
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
          <KeyCenterSelector
            keyCenter={keyCenter}
            setKeyCenter={setKeyCenter}
          />
          <ModeSelector mode={mode} setMode={setMode} />
          <Button onClick={addChord}>Hit me!</Button>
          <Button onClick={undoChord}>Undo</Button>
          <Button onClick={resetChords}>Reset</Button>
        </Flex>
      </Paragraph>
      <ChordList chords={chords} />
    </Box>
  );
};
