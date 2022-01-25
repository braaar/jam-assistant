import { Select } from "theme-ui";
import { Mode } from "../../18th-century-europe/mode";

export interface ModeSelectorProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  mode,
  setMode,
}) => {
  const modes = Object.values(Mode).filter(
    (value) => typeof value === "string"
  );
  return (
    <>
      <Select
        onChange={(event) =>
          setMode(Mode[event.target.value as keyof typeof Mode])
        }
      >
        {modes.map((key) => (
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
