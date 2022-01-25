import { Chord, ChordFunction } from "../18th-century-europe/chord";

import {
  getAccidentalSymbol,
  getNoteSymbol,
  getTriadSymbol,
} from "../18th-century-europe/engraving";
import {
  getNote7FromNote21,
  getNoteDataFromNote21,
  getNote12FromNote7,
  Note7,
  Note21,
  NoteDegree,
} from "../18th-century-europe/note";
import { Mode } from "../18th-century-europe/mode";
import {
  getNote12FromModeAndDegree,
  getTriad,
} from "../18th-century-europe/scales";
import { chords, extensions } from "./data";
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
  center: Note21,
  currentChords: string[]
) => {
  const index = randomInteger(0, 6);

  const newChord = engraveChord(index, center, mode);

  return newChord;
};

export const engraveChords = (chords: Chord[], center: Note21, mode: Mode) => {
  return chords.map((chord) =>
    engraveChord(chord.function.valueOf(), center, mode)
  );
};

/** Writes a human readable chord baed on the chord object */
export const engraveChord = (
  noteDegree: NoteDegree,
  center: Note21,
  mode: Mode
) => {
  const triad = getTriad(noteDegree, mode);
  return `${getNote(noteDegree, center, mode)}${getTriadSymbol(triad)}`;
};

/** Get a note in a scale given its position, the key center and the mode of the scale
 * @param numberInScale specifies which note in the scale we want to retrieve
 * @param center specified the key center
 * @param mode specifies the scale mode
 * @returns a string containing the note name and accidental (e.g. `'C#'`)
 */
export const getNote = (
  numberInScale: NoteDegree,
  center: Note21,
  mode: Mode
) => {
  const myNotePitch = getNote12FromModeAndDegree(center, numberInScale, mode);

  // The base note number from (0-6) of the target note
  const baseNoteNumber = (getNote7FromNote21(center) + numberInScale) % 7;

  const baseNotePitch = getNote12FromNote7(baseNoteNumber);
  //check to see if the note name matches the note name we get from eleven notes
  if (addSemitones(baseNotePitch, 1) === myNotePitch) {
    // Note should be a sharp
    return `${getNoteSymbol(baseNoteNumber)}${getAccidentalSymbol(
      Accidental.SHARP
    )}`;
  } else if (addSemitones(baseNotePitch, 2) === myNotePitch) {
    // Note should be double sharp
    return `${getNoteSymbol(baseNoteNumber)}${getAccidentalSymbol(
      Accidental.SHARP
    )}${getAccidentalSymbol(Accidental.SHARP)}`;
  } else if (baseNotePitch === addSemitones(myNotePitch, 1)) {
    // Note should be a flat
    return `${getNoteSymbol(baseNoteNumber)}${getAccidentalSymbol(
      Accidental.FLAT
    )}`;
  } else if (baseNotePitch === addSemitones(myNotePitch, 2)) {
    // Note should be a double flat
    return `${getNoteSymbol(baseNoteNumber)}${getAccidentalSymbol(
      Accidental.FLAT
    )}${getAccidentalSymbol(Accidental.FLAT)}`;
  } else {
    // The note is the same, so the target note is the natural note
    return Note7[baseNoteNumber];
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

/**
 * @param note number from 0 to 20 representing the note in the 21-note system
 * @returns a number from 0 to 11 representing the pitch in 12 TET (from C=0 to B=11)
 */
export const pitchFromTwentyOneNote = (note: Note21) => {
  const noteData = getNoteDataFromNote21(note);
  const basePitch = getNote12FromNote7(noteData.note);
  const accidental = noteData.accidental;

  if (accidental === Accidental.FLAT) {
    return (basePitch + 12 - 1) % 12; //adding 11 so we don't risk getting a negative number
  } else if (accidental === Accidental.SHARP) {
    return (basePitch + 1) % 12;
  } else {
    return basePitch;
  }
};

/**
 *
 * @param baseNote a note in the Note12 system, from 0=C to 11=B
 * @param semitones the amount of semitones to add
 * @returns
 */
export const addSemitones = (baseNote: number, semitones: number) => {
  return (baseNote + semitones) % 12;
};
