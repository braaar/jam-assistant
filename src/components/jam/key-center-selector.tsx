import { Select } from "theme-ui";
import { Note21 } from "../../18th-century-europe/note";

export interface KeyCenterSelectorProps {
  keyCenter: Note21;
  setKeyCenter: (keyCenter: Note21) => void;
}

export const KeyCenterSelector: React.FC<KeyCenterSelectorProps> = ({
  keyCenter,
  setKeyCenter,
}) => {
  const keyCenters = Object.values(Note21).filter(
    (value) => typeof value === "string"
  );

  return (
    <>
      <Select
        onChange={(event) =>
          setKeyCenter(Note21[event.target.value as keyof typeof Note21])
        }
        sx={{ minWidth: "80px" }}
      >
        {keyCenters.map((key) => (
          <option key={key} value={key}>
            {`${key.toString().charAt(0)}${key
              .toString()
              .slice(1)
              .toLowerCase()}`}
          </option>
        ))}
      </Select>
    </>
  );
};
