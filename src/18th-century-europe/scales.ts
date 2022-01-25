import { pitchFromTwentyOneNote } from "../services/chord-helpers";
import { ChordFunction } from "./chord";
import { Step } from "./interval";
import { Mode } from "./mode";
import { Note21, NoteDegree } from "./note";
import { Triad } from "./triad";

export const SCALES: Record<Mode, Record<ChordFunction, Triad>> = {
  [Mode.IONIAN]: {
    [ChordFunction.I]: Triad.MAJOR,
    [ChordFunction.II]: Triad.MINOR,
    [ChordFunction.III]: Triad.MINOR,
    [ChordFunction.IV]: Triad.MAJOR,
    [ChordFunction.V]: Triad.MAJOR,
    [ChordFunction.VI]: Triad.MINOR,
    [ChordFunction.VII]: Triad.DIMINISHED,
  },
  [Mode.DORIAN]: {
    [ChordFunction.I]: Triad.MINOR,
    [ChordFunction.II]: Triad.MINOR,
    [ChordFunction.III]: Triad.MAJOR,
    [ChordFunction.IV]: Triad.MAJOR,
    [ChordFunction.V]: Triad.MINOR,
    [ChordFunction.VI]: Triad.DIMINISHED,
    [ChordFunction.VII]: Triad.MAJOR,
  },
  [Mode.PHRYGIAN]: {
    [ChordFunction.I]: Triad.MINOR,
    [ChordFunction.II]: Triad.MAJOR,
    [ChordFunction.III]: Triad.MAJOR,
    [ChordFunction.IV]: Triad.MINOR,
    [ChordFunction.V]: Triad.DIMINISHED,
    [ChordFunction.VI]: Triad.MAJOR,
    [ChordFunction.VII]: Triad.MINOR,
  },
  [Mode.LYDIAN]: {
    [ChordFunction.I]: Triad.MAJOR,
    [ChordFunction.II]: Triad.MAJOR,
    [ChordFunction.III]: Triad.MINOR,
    [ChordFunction.IV]: Triad.DIMINISHED,
    [ChordFunction.V]: Triad.MAJOR,
    [ChordFunction.VI]: Triad.MINOR,
    [ChordFunction.VII]: Triad.MINOR,
  },
  [Mode.MIXOLYDIAN]: {
    [ChordFunction.I]: Triad.MAJOR,
    [ChordFunction.II]: Triad.MINOR,
    [ChordFunction.III]: Triad.DIMINISHED,
    [ChordFunction.IV]: Triad.MAJOR,
    [ChordFunction.V]: Triad.MINOR,
    [ChordFunction.VI]: Triad.MINOR,
    [ChordFunction.VII]: Triad.MAJOR,
  },
  [Mode.AEOLIAN]: {
    [ChordFunction.I]: Triad.MINOR,
    [ChordFunction.II]: Triad.DIMINISHED,
    [ChordFunction.III]: Triad.MAJOR,
    [ChordFunction.IV]: Triad.MINOR,
    [ChordFunction.V]: Triad.MINOR,
    [ChordFunction.VI]: Triad.MAJOR,
    [ChordFunction.VII]: Triad.MAJOR,
  },
  [Mode.LOCRIAN]: {
    [ChordFunction.I]: Triad.DIMINISHED,
    [ChordFunction.II]: Triad.MAJOR,
    [ChordFunction.III]: Triad.MINOR,
    [ChordFunction.IV]: Triad.MINOR,
    [ChordFunction.V]: Triad.MAJOR,
    [ChordFunction.VI]: Triad.MAJOR,
    [ChordFunction.VII]: Triad.MINOR,
  },
};
/**
 *
 * @param mode diatonic scale mode
 * @returns a list of triads for each harmonic function, from I (0) to VII (6)
 */
export const getModeTriads = (mode: Mode) => {
  return SCALES[mode];
};

/**
 * Get a triad type for a chord with a given mode and chordFunction
 * @param chordFunction the chord funtion, from I (0) to VII (6)
 * @param mode the diatonic scale mode
 * @returns a triad type
 */
export const getTriad = (
  chordFunction: ChordFunction | NoteDegree,
  mode: Mode
) => {
  return getModeTriads(mode)[chordFunction];
};

export const SCALE_INTERVALS = {
  [Mode.IONIAN]: [
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
  ],
  [Mode.DORIAN]: [
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
  ],
  [Mode.PHRYGIAN]: [
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
  ],
  [Mode.LYDIAN]: [
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
  ],
  [Mode.MIXOLYDIAN]: [
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
  ],
  [Mode.AEOLIAN]: [
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
  ],
  [Mode.LOCRIAN]: [
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.HALF,
    Step.WHOLE,
    Step.WHOLE,
    Step.WHOLE,
  ],
};
/**
 * Get the intervals for a diatonic scale
 * @param mode The mode of the scale
 * @returns a list of intervals between each note
 */
export const getScaleIntervals = (mode: Mode) => {
  return SCALE_INTERVALS[mode];
};

/**
 *
 * @param center the keyCenter of the scale
 * @param degree the position of the note in the scal, from 0 to 6
 * @param mode the diatonic scale mode
 * @returns a number from 0-11 representing the note in 12 TET (C=0, B=11)
 */
export const getNote12FromModeAndDegree = (
  center: Note21,
  degree: ChordFunction | NoteDegree,
  mode: Mode
) => {
  const centerPitch = pitchFromTwentyOneNote(center);

  const scaleIntervals = getScaleIntervals(mode);

  const intervalsToAddTogether = scaleIntervals.slice(0, degree);

  // Adds together the intervals in that scale to get to the right pitch (number from 0-11) for the target note
  const myNotePitch =
    intervalsToAddTogether.reduce((sum, currentInterval) => {
      return sum + currentInterval;
    }, centerPitch) % 12;

  return myNotePitch;
};
