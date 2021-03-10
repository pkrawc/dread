import { CSSObject } from "@styled-system/css"
import styled from "styled-components"
import { layout, LayoutProps, space, SpaceProps } from "styled-system"
import { sx } from "./dread-provider"

interface ContainerProps extends LayoutProps, SpaceProps {
  sx?: CSSObject
}

export const Container = styled.section<ContainerProps>(space, layout, sx)

Container.defaultProps = {
  maxWidth: "90rem",
  mx: "auto",
  px: "2rem",
}
