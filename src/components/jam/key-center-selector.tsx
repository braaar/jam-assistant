import { Select } from "theme-ui";
import {
  getAccidentalSymbol,
  getNoteSymbol,
} from "../../18th-century-europe/engraving";
import { getNoteDataFromNote21, Note21 } from "../../18th-century-europe/note";

export interface KeyCenterSelectorProps {
  keyCenter: Note21;
  setKeyCenter: (keyCenter: Note21) => void;
}

export const KeyCenterSelector: React.FC<KeyCenterSelectorProps> = ({
  keyCenter,
  setKeyCenter,
}) => {
  const keyCenters = [
    Note21.C_NATURAL,
    Note21.D_NATURAL,
    Note21.E_NATURAL,
    Note21.F_NATURAL,
    Note21.G_NATURAL,
    Note21.A_NATURAL,
    Note21.B_NATURAL,
    Note21.C_FLAT,
    Note21.C_SHARP,
    Note21.D_FLAT,
    Note21.E_FLAT,
    Note21.F_SHARP,
    Note21.G_FLAT,
    Note21.A_FLAT,
    Note21.B_FLAT,
  ];

  return (
    <>
      <Select
        onChange={(event) =>
          setKeyCenter(Note21[event.target.value as keyof typeof Note21])
        }
        sx={{ minWidth: "80px" }}
      >
        {keyCenters.map((key) => {
          const data = getNoteDataFromNote21(key);
          return (
            <option key={key} value={Note21[key]}>
              {`${getNoteSymbol(data.note)}${getAccidentalSymbol(
                data.accidental
              )}`}
            </option>
          );
        })}
      </Select>
    </>
  );
};
