import { Accidental } from "./accidental";
import { Triad } from "./triad";

export const CHORD_SYMBOLS: Record<Triad, string> = {
  [Triad.MAJOR]: "",
  [Triad.MINOR]: "m",
  [Triad.DIMINISHED]: "dim",
  [Triad.AUGMENTED]: "aug",
};

export const ACCIDENTALS: Record<Accidental, string> = {
  [Accidental.NATURAL]: "",
  [Accidental.SHARP]: "#",
  [Accidental.FLAT]: "♭",
};
