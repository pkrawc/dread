import React, { PropsWithChildren, useMemo, useState } from "react"
import { ThemeProvider } from "styled-components"
import css, { SystemStyleObject } from "@styled-system/css"
import { dreadTheme } from "./theme"
import { Base } from "./base"
import { DeepPartial } from "./types"
import merge from "lodash.merge"

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
  const theme = useMemo(() => merge({}, dreadTheme, customTheme), [customTheme])
  return (
    <ThemeProvider theme={theme}>
      <Base />
      {children}
    </ThemeProvider>
  )
}
