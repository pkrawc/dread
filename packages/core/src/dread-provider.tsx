import React, { PropsWithChildren, useState } from "react"
import { ThemeProvider } from "styled-components"
import css, { SystemStyleObject } from "@styled-system/css"
import { dreadTheme } from "./theme"
import { Base } from "./base"
import { DeepPartial } from "./types"

export type SXObject = SystemStyleObject & { text?: string | string[] }

export const sx = ({ sx = {} }: { sx?: SXObject }) => {
  const { text, ...styleProps } = sx
  if (text) {
    const textArray = Array.isArray(text) ? text : [text]
    return css({
      variant: textArray.map((txt) => `text.${txt}`),
      ...styleProps,
    })
  }
  return css(styleProps)
}

interface ProviderProps {
  theme?: DeepPartial<typeof dreadTheme>
}

export function DreadProvider({
  theme: customTheme = {},
  children,
}: PropsWithChildren<ProviderProps>) {
  const [colorPreference, setPreference] = useState("light")
  return (
    <ThemeProvider theme={{ ...dreadTheme, ...customTheme }}>
      <Base />
      {children}
    </ThemeProvider>
  )
}
