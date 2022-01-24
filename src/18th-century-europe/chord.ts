import { Accidental } from "./accidental";
import { ChordFunction } from "./chord-function";

export type Chord = {
  function: ChordFunction;
  accidental?: Accidental;
};
