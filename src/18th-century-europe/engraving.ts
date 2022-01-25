import { Accidental } from "./accidental";
import { Note7 } from "./note";
import { Triad } from "./triad";

export const CHORD_SYMBOLS: Record<Triad, string> = {
  [Triad.MAJOR]: "",
  [Triad.MINOR]: "m",
  [Triad.DIMINISHED]: "dim",
  [Triad.AUGMENTED]: "aug",
};

export const ACCIDENTALS: Record<Accidental, string> = {
  [Accidental.NATURAL]: "",
  [Accidental.SHARP]: "♯",
  [Accidental.FLAT]: "♭",
};
/** Returns a string symbol representing a type of triad, such as `'m'`*/
export const getTriadSymbol = (triad: Triad) => {
  return CHORD_SYMBOLS[triad];
};

/** Returns a string symbol for an accidental, such as `'♯'` */
export const getAccidentalSymbol = (accidental: Accidental) => {
  return ACCIDENTALS[accidental];
};

export const getNoteSymbol = (noteNumber: number) => {
  return Note7[noteNumber];
};
