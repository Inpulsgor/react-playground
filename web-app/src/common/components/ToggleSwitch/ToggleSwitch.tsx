import { FC } from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
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
        label={
          isThemeDark ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon sx={{ color: "orange" }} />
          )
        }
      />
    </FormGroup>
  );
};

export default ToggleSwitch;
