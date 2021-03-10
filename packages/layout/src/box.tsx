import { CSSObject } from "@styled-system/css"
import styled from "styled-components"
import { sx } from "./dread-provider"

interface BoxProps {
  sx?: CSSObject
}

export const Box = styled.div<BoxProps>(sx)
