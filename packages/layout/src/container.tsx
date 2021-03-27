import css from "@styled-system/css"
import styled from "styled-components"
import { sx, SXObject } from "./dread-provider"

interface ContainerProps {
  sx?: SXObject
}

export const Container = styled.section<ContainerProps>(
  css({ maxWidth: "80rem", mx: "auto", px: "2rem" }),
  sx
)
