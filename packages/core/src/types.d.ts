import "styled-components"
import { SXObject } from "./dread-provider"
import { DreadTheme } from "./theme"

declare module "styled-components" {
  export interface DefaultTheme extends DreadTheme {}
}

declare module "react" {
  interface Attributes {
    sx?: SXObject
  }
}

export type DeepPartial<Item> = {
  [Key in keyof Item]?: DeepPartial<Item[Key]>
}
