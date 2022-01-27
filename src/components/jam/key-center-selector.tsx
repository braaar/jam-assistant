import { Select } from "theme-ui";
import { Note21 } from "../../18th-century-europe/note";

export interface KeyCenterSelectorProps {
  keyCenter: Note21 | null;
  setKeyCenter: (keyCenter: Note21 | null) => void;
}

export const KeyCenterSelector: React.FC<KeyCenterSelectorProps> = ({
  keyCenter,
  setKeyCenter,
}) => {
  const keyCenters = Object.values(Note21).filter(
    (value) => typeof value === "string"
  );

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Chromatic") {
      setKeyCenter(null);
    } else {
      setKeyCenter(Note21[event.target.value as keyof typeof Note21]);
    }
  };

  return (
    <>
      <Select onChange={onChange} sx={{ minWidth: "80px" }}>
        <option key={"Chromatic"}>Chromatic</option>
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
