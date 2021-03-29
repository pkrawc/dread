const uiColors = {
  "00": "#F2F2F2",
  "02": "#E0E0E0",
  "04": "#BDBDBD",
  "06": "#828282",
  "08": "#4F4F4F",
  "10": "#222222",
}

enum StyleType {
  Normal = "normal",
  Sharp = "sharp",
  Rounded = "rounded",
}

export const dreadTheme = {
  style: "normal" as StyleType,
  colors: {
    ui: uiColors,
    primary: uiColors["08"],
    primaryDark: uiColors["10"],
    secondary: uiColors["02"],
    secondaryDark: uiColors["04"],
    text: uiColors["10"],
    textSecondary: uiColors["06"],
    bg: uiColors["00"],
    bgSecondary: uiColors["02"],
    accent: "#55efc4",
    error: "#d63031",
  },
  space: [0, 8, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
  fonts: {
    body: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    small: "1rem",
    body: "1.5rem",
    subtitle: "2rem",
    title: "3rem",
    headline: "4rem",
    hero: "5rem",
  },
  lineHeights: {
    body: "1.334",
    heading: "1.5",
  },
  text: {
    button: {
      fontSize: "body",
      fontWeight: "bold",
      lineHeight: "body",
    },
    body: {
      fontSize: "body",
      fontWeight: "normal",
      lineHeight: "body",
    },
    subtitle: {
      fontSize: "subtitle",
      fontWeight: "bold",
      lineHeight: "heading",
    },
  },
}
