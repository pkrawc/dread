import { CSSObject } from "@styled-system/css"
import { Box } from "@dread/layout"
import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  sx?: CSSObject
  as?: keyof JSX.IntrinsicElements
}

export function Button({ as = "button", sx = {}, ...props }: ButtonProps) {
  return (
    <Box
      {...props}
      as={as}
      sx={{
        px: "2rem",
        py: "calc(1rem - 0.25rem)",
        appearance: "none",
        bg: "transparent",
        borderStyle: "solid",
        borderColor: "ui.900",
        borderWidth: 3,
        borderRadius: 4,
        color: "ui.900",
        cursor: "pointer",
        text: "button",
        ...sx,
      }}
    />
  )
}
