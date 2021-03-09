import React from "react"
import { ThemeProvider } from "styled-components"

const dreadTheme = {}

export function DreadProvider({ theme = {}, ...props }) {
  return <ThemeProvider {...props} theme={{ ...dreadTheme, ...theme }} />
}
