import "styled-components"
import { CSSObject, CSSProp } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      ui: string[]
    }

    space: number[]

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