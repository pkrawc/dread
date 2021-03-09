import "styled-components"
import { CSSObject, CSSProp } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      ui: {
        100: string
        300: string
        500: string
        700: string
        900: string
      }
    }

    space: number[]
    fonts: {
      body: string
      monospace: string
    }
    fontSizes: {
      base: string
      body: string
      subtitle: string
      title: string
      headline: string
      hero: string
    }
  }
}

declare module "react" {
  interface Attributes {
    sx?: CSSProp | CSSObject
  }
}
