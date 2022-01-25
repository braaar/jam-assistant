import { Chord } from "../18th-century-europe/chord";
import { ChordFunction } from "../18th-century-europe/chord-function";
import { ACCIDENTALS, CHORD_SYMBOLS } from "../18th-century-europe/engraving";
import { Note, NOTE_PITCHES } from "../18th-century-europe/note";
import { Mode } from "../18th-century-europe/mode";
import { SCALES, SCALE_INTERVALS } from "../18th-century-europe/scales";
import { chords, extensions } from "./data";
import {
  TwentyOneNote,
  TWENTY_ONE_NOTES,
} from "../18th-century-europe/twenty-one-notes";
import { Interval } from "../18th-century-europe/interval";
import { Accidental } from "../18th-century-europe/accidental";

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

export const getNewChordWithinKey = (
  mode: Mode,
  center: TwentyOneNote,
  chordBase: Chord[]
) => {
  const index = randomInteger(0, 6);

  return engraveChord(chordBase[index], center, mode);
};

export const engraveChords = (
  chords: Chord[],
  center: TwentyOneNote,
  mode: Mode
) => {
  return chords.map((chord) => engraveChord(chord, center, mode));
};

export const engraveChord = (
  chord: Chord,
  center: TwentyOneNote,
  mode: Mode
) => {
  const scale = SCALES[mode];
  const triad = scale[chord.function];
  return `${getNote(chord.function, center, mode)}${CHORD_SYMBOLS[triad]}`;
};

/** Get a note in a scale given its position, the key center and the mode of the scale
 * @param numberInScale specifies which note in the scale we want to retrieve
 * @param center specified the key center
 * @param mode specifies the scale mode
 * @returns a string containing the note name and accidental (e.g. `'C#'`)
 */
export const getNote = (
  numberInScale: ChordFunction,
  center: TwentyOneNote,
  mode: Mode
) => {
  const centerPitch = pitchFromTwentyOneNote(center);

  const scaleIntervals = SCALE_INTERVALS[mode];

  const intervalsToAddTogether = scaleIntervals.slice(0, numberInScale);

  // Adds together the intervals in that scale to get to the right pitch (number from 0-11) for the target note
  const myNotePitch =
    intervalsToAddTogether.reduce((sum, currentInterval) => {
      return sum + currentInterval;
    }, centerPitch) % 12;

  // The base note number from (0-6) of the target note
  const baseNoteNumber = (TWENTY_ONE_NOTES[center].note + numberInScale) % 7;

  //check to see if the note name matches the note name we get from eleven notes
  if (addPitch(NOTE_PITCHES[baseNoteNumber], 1) === myNotePitch) {
    // The pitch of the base note is one semitone lower, so our note should be a sharp
    return `${Note[baseNoteNumber]}${ACCIDENTALS[Accidental.SHARP]}`;
  } else if (addPitch(NOTE_PITCHES[baseNoteNumber], 2) === myNotePitch) {
    // The pitch of the base note is two semitones lower, so our note should be double sharp
    return `${Note[baseNoteNumber]}${ACCIDENTALS[Accidental.SHARP]}${
      ACCIDENTALS[Accidental.SHARP]
    }`;
  } else if (NOTE_PITCHES[baseNoteNumber] === addPitch(myNotePitch, 1)) {
    // The pitch of the base note is one semitone higher, so our note should be a flat
    return `${Note[baseNoteNumber]}${ACCIDENTALS[Accidental.FLAT]}`;
  } else if (NOTE_PITCHES[baseNoteNumber] === addPitch(myNotePitch, 2)) {
    // The pitch of the base note is two semitones higher, so our note should be a double flat
    return `${Note[baseNoteNumber]}${ACCIDENTALS[Accidental.FLAT]}${
      ACCIDENTALS[Accidental.FLAT]
    }`;
  } else {
    // The note is the same, so the target note is the natural note
    return Note[baseNoteNumber];
  }
};

/** Add an interval to a pitch
 * @param base a number from 0-11 representing a note pitch
 * @param interval an interval object describing a note interval
 * @returns a number from 0-11 representing a note pitch
 */
export const pitchFromBaseAndInterval = (base: number, interval: Interval) => {
  // add on (the interval modulo 12)
  return (base + interval) % 12;
};

/** Returns a number from 0 to 11 representing the pitch in 12 TET (from C=0 to B=11) */
export const pitchFromTwentyOneNote = (note: TwentyOneNote) => {
  const basePitch = NOTE_PITCHES[TWENTY_ONE_NOTES[note].note];
  const accidental = TWENTY_ONE_NOTES[note].accidental;

  if (accidental === Accidental.FLAT) {
    return (basePitch + 12 - 1) % 12; //adding 11 so we don't risk getting a negative number
  } else if (accidental === Accidental.SHARP) {
    return (basePitch + 1) % 12;
  } else {
    return basePitch;
  }
};

export const addPitch = (baseNote: number, addend: number) => {
  return (baseNote + addend) % 12;
};
