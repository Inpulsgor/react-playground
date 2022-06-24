import { FC } from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { useAppDispatch } from "redux/store";
import { toggleTheme } from "entities/theme/redux/themeSlice";
import { useTheme } from "common/hooks/useTheme";
import { styles } from "./ToggleSwitch.styles";

const ToggleSwitch: FC = () => {
  const dispatch = useAppDispatch();
  const { isThemeDark } = useTheme();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <FormGroup sx={{ ml: "auto" }}>
      <FormControlLabel
        sx={styles.form}
        control={
          <Switch
            sx={styles.switch}
            checked={isThemeDark}
            onChange={handleToggle}
          />
        }
        label={isThemeDark ? "Dark" : "Light"}
      />
    </FormGroup>
  );
};

export default ToggleSwitch;
