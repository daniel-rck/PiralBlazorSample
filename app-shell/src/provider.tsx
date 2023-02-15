import React, { PropsWithChildren } from "react";

import {
  createTheme,
  initializeIcons,
  mergeStyles,
  Theme,
  ThemeProvider,
} from "@fluentui/react";

export const appTheme: Theme = createTheme({
  palette: {
    themePrimary: "#258f64",
    themeLighterAlt: "#f3fbf8",
    themeLighter: "#d1ede2",
    themeLight: "#acddca",
    themeTertiary: "#68bc9a",
    themeSecondary: "#379c74",
    themeDarkAlt: "#21815a",
    themeDark: "#1c6d4c",
    themeDarker: "#155038",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
});

export const provider: React.FC<PropsWithChildren> = ({ children }) => {
  // Inject some global styles
  mergeStyles({
    ":global(body,html,#root)": {
      margin: 0,
      padding: 0,
      height: "100vh",
    },
  });

  // Add '@fluentui/font-icons-mdl2'
  initializeIcons();

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
