import React, { PropsWithChildren } from "react"
import { createGlobalStyle, ThemeProvider, css } from "styled-components"
import systemCss, { SystemStyleObject } from "@styled-system/css"
import { dreadTheme } from "./theme"

export type SXObject = SystemStyleObject & { text?: string | string[] }

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
    pre,
    code {
      font-family: ${theme.fonts.monospace};
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
