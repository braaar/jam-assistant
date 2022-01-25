import { Accidental } from "./accidental";

export type Chord = {
  function: ChordFunction;
  accidental?: Accidental;
};

export enum ChordFunction {
  I = 0,
  II = 1,
  III = 2,
  IV = 3,
  V = 4,
  VI = 5,
  VII = 6,
}
