import React, { PropsWithChildren } from "react"
import { createGlobalStyle, ThemeProvider, css } from "styled-components"
import systemCss, { SystemStyleObject } from "@styled-system/css"

/**
 * TODO: Create a theme merging tool that will recurrsively merge custom and default themes.
 */

const dreadTheme = {
  colors: {
    ui: {
      "100": "#ffffff",
      "300": "#bbbbbb",
      "500": "#949494",
      "700": "#636363",
      "900": "#333333",
    },
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

type SXObject = SystemStyleObject & { text?: string | string[] }

export const sx = ({ sx = {} }: { sx?: SXObject }) => {
  const { text, ...styleProps } = sx
  if (text) {
    const textArray = Array.isArray(text) ? text : [text]
    return systemCss({
      variant: textArray.map((txt) => `text.${txt}`),
      ...styleProps,
    })
  }
  return systemCss(styleProps)
}

export const Base = createGlobalStyle(
  ({ theme }) => css`
    :root {
      font-size: ${theme.space[2]}px;
    }
    html,
    body,
    div,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    li,
    aside,
    section,
    main,
    header,
    footer,
    img,
    picture,
    figure,
    input,
    button,
    select {
      margin: 0;
      padding: 0;
    }
    html,
    body {
      width: 100%;
      height: 100%;
    }
    body {
      --base-size: ${theme.space[2]}px;
      font-size: ${theme.fontSizes.body};
      font-family: ${theme.fonts.body};
    }
  `
)

interface ProviderProps {
  theme?: Partial<typeof dreadTheme>
}

export function DreadProvider({
  theme = {},
  children,
}: PropsWithChildren<ProviderProps>) {
  return (
    <ThemeProvider theme={{ ...dreadTheme, ...theme }}>
      <Base />
      {children}
    </ThemeProvider>
  )
}
