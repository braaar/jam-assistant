import { Select } from "theme-ui";
import { TwentyOneNote } from "../../18th-century-europe/twenty-one-notes";

export interface KeyCenterSelectorProps {
  keyCenter: TwentyOneNote;
  setKeyCenter: (keyCenter: TwentyOneNote) => void;
}

export const KeyCenterSelector: React.FC<KeyCenterSelectorProps> = ({
  keyCenter,
  setKeyCenter,
}) => {
  const keyCenters = Object.values(TwentyOneNote).filter(
    (value) => typeof value === "string"
  );

  return (
    <>
      <Select
        onChange={(event) =>
          setKeyCenter(
            TwentyOneNote[event.target.value as keyof typeof TwentyOneNote]
          )
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
