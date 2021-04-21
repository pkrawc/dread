import { useReducer, useEffect } from "react"

interface ColorModeOptions {
  modes: string[]
}

export function useColorMode({ modes = ["light", "dark"] }: ColorModeOptions) {
  return modes[0]
}
