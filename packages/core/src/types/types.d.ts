import "styled-components"
import { SXObject } from "../dread-provider"
import { dreadTheme } from "../theme"

type DreadTheme = typeof dreadTheme
declare module "styled-components" {
  export interface DefaultTheme extends DreadTheme {}
}

declare module "react" {
  interface Attributes {
    sx?: SXObject
  }
}
