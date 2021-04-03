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
      outlineWidth: 1,
      outlineStyle: "solid",
      outlineColor: "primary",
    },
  }),
  variant({
    scale: "buttons",
    variants: {
      primary: css({
        bg: "primary",
        borderColor: "primary",
        color: "bg",
        "&:hover, &:focus": {
          bg: "primaryDark",
          borderColor: "primaryDark",
        },
      }),
      standard: css({
        bg: "transparent",
        borderColor: "primary",
        color: "primary",
        "&:hover, &:focus": {
          bg: "primary",
          color: "bg",
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
