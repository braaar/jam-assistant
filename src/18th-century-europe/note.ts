import { Accidental } from "./accidental";

export enum NoteDegree {
  I,
  II,
  III,
  IV,
  V,
  VI,
  VII,
}

/** Natural notes from C to B, represented by numbers 0 to 6 */
export enum Note7 {
  C,
  D,
  E,
  F,
  G,
  A,
  B,
}
/** All the 12 notes in 12 TET from C to B, represented by numbers 0 to 11 */
export enum Note12 {
  C,
  D_FLAT,
  D,
  E_FLAT,
  E,
  F,
  G_FLAT,
  G,
  A_FLAT,
  A,
  B_FLAT,
  B,
}
/** Natural, sharp and flat permutations of all the 7 natural notes, from C to B. Represented by numbers from 0 to 20*/
export enum Note21 {
  C_NATURAL = 0,
  C_SHARP = 1,
  C_FLAT = 2,
  D_NATURAL = 3,
  D_SHARP = 4,
  D_FLAT = 5,
  E_NATURAL = 6,
  E_SHARP = 7,
  E_FLAT = 8,
  F_NATURAL = 9,
  F_SHARP = 10,
  F_FLAT = 11,
  G_NATURAL = 12,
  G_SHARP = 13,
  G_FLAT = 14,
  A_NATURAL = 15,
  A_SHARP = 16,
  A_FLAT = 17,
  B_NATURAL = 18,
  B_SHARP = 19,
  B_FLAT = 20,
}

export const NOTE_7_TO_NOTE_12: Record<Note7, Note12> = {
  0: 0, // C
  1: 2, // D
  2: 4, // E
  3: 5, // F
  4: 7, // G
  5: 9, // A
  6: 11, // B
};

export const NOTE_21_DATA: Record<
  Note21,
  { note: Note7; accidental: Accidental }
> = {
  [Note21.C_NATURAL]: { note: Note7.C, accidental: Accidental.NATURAL },
  [Note21.C_SHARP]: { note: Note7.C, accidental: Accidental.SHARP },
  [Note21.C_FLAT]: { note: Note7.C, accidental: Accidental.FLAT },
  [Note21.D_NATURAL]: { note: Note7.D, accidental: Accidental.NATURAL },
  [Note21.D_SHARP]: { note: Note7.D, accidental: Accidental.SHARP },
  [Note21.D_FLAT]: { note: Note7.D, accidental: Accidental.FLAT },
  [Note21.E_NATURAL]: { note: Note7.E, accidental: Accidental.NATURAL },
  [Note21.E_SHARP]: { note: Note7.E, accidental: Accidental.SHARP },
  [Note21.E_FLAT]: { note: Note7.E, accidental: Accidental.FLAT },
  [Note21.F_NATURAL]: { note: Note7.F, accidental: Accidental.NATURAL },
  [Note21.F_SHARP]: { note: Note7.F, accidental: Accidental.SHARP },
  [Note21.F_FLAT]: { note: Note7.F, accidental: Accidental.FLAT },
  [Note21.G_NATURAL]: { note: Note7.G, accidental: Accidental.NATURAL },
  [Note21.G_SHARP]: { note: Note7.G, accidental: Accidental.SHARP },
  [Note21.G_FLAT]: { note: Note7.G, accidental: Accidental.FLAT },
  [Note21.A_NATURAL]: { note: Note7.A, accidental: Accidental.NATURAL },
  [Note21.A_SHARP]: { note: Note7.A, accidental: Accidental.SHARP },
  [Note21.A_FLAT]: { note: Note7.A, accidental: Accidental.FLAT },
  [Note21.B_NATURAL]: { note: Note7.B, accidental: Accidental.NATURAL },
  [Note21.B_SHARP]: { note: Note7.B, accidental: Accidental.SHARP },
  [Note21.B_FLAT]: { note: Note7.B, accidental: Accidental.FLAT },
};

/**
 * Get one of the 11 unique pitches from the note value of a natural note
 * @param note a note in the 7-note system
 * @returns a note in the 12-note system
 */
export const getNote12FromNote7 = (note: Note7) => {
  return NOTE_7_TO_NOTE_12[note];
};

/**
 * Gets the basic note in the 7-note system of a note in the 21-note system. Accidentals are disregarded.
 * @param note a note in the 21-note system
 * @returns a note in the 7-note system
 */
export const getNote7FromNote21 = (note: Note21) => {
  return NOTE_21_DATA[note].note;
};

/**
 *
 * @param note a note in the 21-note system
 * @returns a data object which describes the Note7 and accidental of the note
 */
export const getNoteDataFromNote21 = (note: Note21) => {
  return NOTE_21_DATA[note];
};
