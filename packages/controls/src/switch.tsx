import React, { forwardRef, InputHTMLAttributes } from "react"
import { Box, SXObject } from "@dread/core"

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  sx?: SXObject
  label?: string
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { sx = {}, label, ...props },
  ref
) {
  return (
    <Box
      as="label"
      sx={{
        display: label ? "flex" : "inline-flex",
        "& input:checked ~ .track": {
          bg: "text",
        },
        "& input:checked ~ .track .slider": {
          bg: "background",
          borderColor: "text",
          transform: "translateX(100%)",
        },
        ...sx,
      }}
    >
      <Box {...props} ref={ref} as="input" type="checkbox" hidden />
      {label && (
        <Box as="span" sx={{ mr: "auto" }}>
          {label}
        </Box>
      )}
      <Box
        className="track"
        sx={{
          flexShrink: 0,
          width: "4rem",
          height: "2rem",
          borderRadius: "2rem",
          bg: "muted",
          transition: "120ms",
          willChange: "background-color",
        }}
      >
        <Box
          className="slider"
          sx={{
            width: "2rem",
            height: "2rem",
            bg: "secondary",
            borderRadius: "50%",
            border: "4px solid transparent",
            borderColor: "muted",
            transition: "120ms",
            transform: "translateX(0)",
            willChange: "background-color, transform, border-color",
          }}
        />
      </Box>
    </Box>
  )
})
