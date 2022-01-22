import { chords, extensions } from "./data";

export const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getNewChord = (currentChords: string[]) => {
  let newChord = generateChord();
  while (currentChords.includes(newChord)) {
    // find a new one
    newChord = generateChord();
  }
  return newChord;
};

export const generateChord = () => {
  const index = randomInteger(0, chords.Chromatic.length - 1);

  const extensionIndex = randomInteger(0, extensions.length - 1);
  const newChord = chords.Chromatic[index] + extensions[extensionIndex];
  return newChord;
};
