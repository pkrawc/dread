import { CSSObject } from "@styled-system/css"
import { HTMLAttributes } from "react"
import styled from "styled-components"
import { sx, SXObject } from "./dread-provider"

interface BoxProps extends HTMLAttributes<HTMLElement> {
  sx?: SXObject
}

export const Box = styled.div<BoxProps>(sx)
