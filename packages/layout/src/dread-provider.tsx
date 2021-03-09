import React, { PropsWithChildren } from "react"
import { createGlobalStyle, ThemeProvider, css } from "styled-components"
import systemCss from "@styled-system/css"

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
  space: [0, 4, 8, 12, 24, 36, 48, 60, 72, 84, 96],
  fonts: {
    body: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    base: "12px",
    body: "1.5rem",
    subtitle: "2rem",
    title: "3rem",
    headline: "4rem",
    hero: "5rem",
  },
}

export const sx = ({ sx = {} }: { sx?: any }) => {
  const { text, ...styleProps } = sx
  if (text) {
    return systemCss({
      variant: [...text].map((txt) => `text.${txt}`),
      ...styleProps,
    })
  }
  return systemCss(styleProps)
}

export const Base = createGlobalStyle(
  ({ theme }) => css`
    :root {
      font-size: ${theme.fontSizes.base};
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
      --base-size: ${theme.fontSizes.base};
      font-size: ${theme.fontSizes.body};
      font-family: ${theme.fonts.body};
    }
  `
)

interface ProviderProps {
  theme?: any
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
