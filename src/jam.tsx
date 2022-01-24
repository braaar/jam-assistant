import React, { useState } from "react";
import { Box, Button, Flex, Heading, Paragraph } from "theme-ui";
import { Chord } from "./18th-century-europe/chord";
import { ChordFunction } from "./18th-century-europe/chord-function";
import { Note } from "./18th-century-europe/note";
import { Mode } from "./18th-century-europe/mode";
import { ChordList } from "./components/chord-list";
import { KeyCenterSelector } from "./components/jam/key-center-selector";
import { ModeSelector } from "./components/jam/mode-selector";
import { getNewChordWithinKey } from "./services/chord-helpers";
import { TwentyOneNote } from "./18th-century-europe/twenty-one-notes";

export const Jam: React.FC = () => {
  const [chords, setChords] = useState<string[]>([]);
  const [mode, setMode] = useState<Mode>(Mode.IONIAN);
  const [keyCenter, setKeyCenter] = useState<TwentyOneNote>(
    TwentyOneNote.C_NATURAL
  );

  const addChord = () => {
    const newChord = getNewChordWithinKey(mode, keyCenter, chordBase);

    const newList = [...chords, newChord];
    setChords(newList);
  };

  const undoChord = () => {
    setChords(chords.slice(0, -1));
  };

  const resetChords = () => {
    setChords([]);
  };

  const chordBase: Chord[] = [
    { function: ChordFunction.I },
    { function: ChordFunction.II },
    { function: ChordFunction.III },
    { function: ChordFunction.IV },
    { function: ChordFunction.V },
    { function: ChordFunction.VI },
    { function: ChordFunction.VII },
  ];

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
