import styled from "styled-components"
import css, { SystemStyleObject } from "@styled-system/css"
import { system } from "styled-system"

export type SXObject = SystemStyleObject & { text?: string | string[] }

export const sx = ({ sx = {} }: { sx?: SXObject }) => {
  const { text, ...styleProps } = sx
  if (text) {
    const textArray = Array.isArray(text) ? text : [text]
    return css({
      variant: textArray.map((txt) => `text.${txt}`),
      ...styleProps,
    })
  }
  return css(styleProps)
}

interface BoxProps {
  sx?: SXObject
}

export const Box = styled.div<BoxProps>(sx)

interface GridContainerProps {
  columns?: number
  sx?: SXObject
}

export const Grid = styled.section<GridContainerProps>(
  css({ display: "grid", gap: 3 }),
  system({
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => {
        return `repeat(${value}, 1fr)`
      },
    },
  }),
  sx
)

Grid.defaultProps = {
  columns: 12,
}

interface ColProps {
  span?: string | number | (string | number)[]
  sx?: SXObject
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

interface ContainerProps {
  sx?: SXObject
}

export const Container = styled.section<ContainerProps>(
  css({
    maxWidth: (theme) => (theme.containerSize ? theme.containerSize : "80rem"),
    mx: "auto",
    px: "2rem",
  }),
  sx
)
