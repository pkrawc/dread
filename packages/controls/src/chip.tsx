import React, { forwardRef, InputHTMLAttributes, memo } from "react"
import { Box, SXObject } from "@dread/core"

interface ChipProps extends InputHTMLAttributes<HTMLInputElement> {
  sx?: SXObject
  type?: "radio" | "checkbox"
}

export const Chip = memo(
  forwardRef<HTMLInputElement, ChipProps>(function Chip(
    { sx = {}, children, type = "checkbox", ...props },
    ref
  ) {
    return (
      <Box
        as="label"
        sx={{
          position: "relative",
          "& input:checked ~ .chip": {
            bg: "text",
            color: "background",
          },
          ...sx,
        }}
      >
        <Box {...props} ref={ref} as="input" type={type} hidden />
        <Box
          className="chip"
          sx={{
            display: "inline-flex",
            gap: "1rem",
            py: "0.5rem",
            px: "1rem",
            borderRadius: "4rem",
            bg: "muted",
            cursor: "pointer",
          }}
        >
          {children}
        </Box>
      </Box>
    )
  })
)
