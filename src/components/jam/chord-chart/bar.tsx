import { Grid } from "theme-ui";

export const Bar: React.FC = ({ children }) => {
  return <Grid columns={4}>{children}</Grid>;
};
