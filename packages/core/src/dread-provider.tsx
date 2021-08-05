import { PropsWithChildren, useMemo, useState } from "react"
import { ThemeProvider } from "styled-components"
import { dreadTheme } from "./theme"
import { Base } from "./base"
import { DeepPartial } from "./types"
import merge from "lodash.merge"

interface ProviderProps {
  theme?: DeepPartial<typeof dreadTheme>
}

export function DreadProvider({
  theme: customTheme = {},
  children,
}: PropsWithChildren<ProviderProps>) {
  // const [colorPreference, setPreference] = useState("light")
  const theme = useMemo(() => merge({}, dreadTheme, customTheme), [customTheme])
  return (
    <ThemeProvider theme={theme}>
      <Base />
      {children}
    </ThemeProvider>
  )
}
