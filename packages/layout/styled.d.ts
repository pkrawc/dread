import "styled-components"
import { SXObject } from "./src/dread-provider"
import { dreadTheme } from "./src/theme"

type DreadTheme = typeof dreadTheme
declare module "styled-components" {
  export interface DefaultTheme extends DreadTheme {}
}

declare module "react" {
  interface Attributes {
    sx?: SXObject
  }
}
