import { CSSObject } from "@styled-system/css"
import styled from "styled-components"
import { system, grid, GridProps } from "styled-system"
import { sx } from "./dread-provider"

interface GridContainerProps extends GridProps {
  columns?: number
  sx?: CSSObject
}

export const Grid = styled.section<GridContainerProps>(
  { display: "grid" },
  system({
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => {
        return `repeat(${value}, 1fr)`
      },
    },
  }),
  grid,
  sx
)

Grid.defaultProps = {
  columns: 12,
  gridGap: 3,
}

interface ColProps {
  span?: string | number | (string | number)[]
  sx?: CSSObject
}

export const Col = styled.section<ColProps>(
  system({
    span: {
      property: "gridColumn",
      transform: (value) => {
        const valueType = typeof value
        if (valueType === "string") {
          if (value.includes("/")) return value
          return `span ${value}`
        }
        if (valueType === "number") {
          return `span ${value}`
        }
        if (Array.isArray(value)) {
          return `${value[0]} / ${value[1]}`
        }
        throw Error("Must return a string, number, or tuple.")
      },
    },
  }),
  sx
)

Col.defaultProps = {
  span: "1 / -1",
}
