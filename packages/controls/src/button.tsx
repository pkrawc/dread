import styled from "styled-components"
import css from "@styled-system/css"
import { variant } from "styled-system"
import { sx, SXObject } from "@dread/core"

interface ButtonProps {
  sx?: SXObject
  variant?: string | string[]
}

export const Button = styled.button<ButtonProps>(
  css({
    px: "2rem",
    py: "calc(1rem - 0.25rem)",
    appearance: "none",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 2,
    color: "text",
    cursor: "pointer",
    fontFamily: "body",
    variant: "text.button",
    transition: "300ms",
    "&:focus": {
      outline: ({ colors }) => `2px solid ${colors.primary}`,
      outlineOffset: "0.25rem",
    },
  }),
  variant({
    scale: "buttons",
    variants: {
      primary: css({
        bg: "primary",
        borderColor: "primary",
        color: "background",
        "&:hover, &:focus": {
          bg: "primary",
          borderColor: "primary",
        },
      }),
      standard: css({
        bg: "transparent",
        borderColor: "primary",
        color: "primary",
        "&:hover, &:focus": {
          bg: "primary",
          color: "background",
        },
      }),
      subtle: css({
        bg: "transparent",
        borderColor: "transparent",
        color: "text",
        "&:hover": {
          bg: "textSecondary",
        },
      }),
    },
  }),
  sx
)

Button.defaultProps = { variant: "standard" }
