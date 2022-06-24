import { Theme } from "@mui/material";

/*
 * All of the colors and breakpoint are located at MUI theme confifuration file
 * path to theme.ts:     src/common/styles.theme.ts
 * path to theme types:  src/@types/material-theme/theme.d
 */

// For every component we create separate styles.ts file. As on example below
const styles = {
  className: {
    flexDirection: "column" as const, // way of using "flexDirection" property, otherwise you will get an ts-error
    color: (theme: Theme): string => theme.palette.primary.light, // use colors palette only from theme
  },
  anotherClassName: {
    color: "custom.white", // another way of how to use theme palette colors
    padding: { xs: "0 20px", md: "0 30px", lg: "10px 10px" }, // set padding value for every breakpoint  separately
  },
};

export default styles;
