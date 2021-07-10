import React, { forwardRef, InputHTMLAttributes } from "react"
import { Box, SXObject } from "@dread/core"
import { useCheckbox } from "./use-controls"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  sx?: SXObject
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ sx = {}, ...props }, ref) {
    const { input, label, error } = useCheckbox({ ...props, ref })
    return (
      <Box
        as="label"
        sx={{
          position: "relative",
          display: "inline-flex",
          gap: "1rem",
          "& input:checked ~ .checkbox": {
            bg: "text",
            stroke: "background",
          },
          ...sx,
        }}
      >
        <Box {...input} />
        <Box
          as="svg"
          viewBox="0 0 24 24"
          className="checkbox"
          sx={{
            flexShrink: 0,
            height: "2rem",
            bg: "transparent",
            border: `2px solid transparent`,
            borderColor: "text",
            borderRadius: 2,
            cursor: "pointer",
            fill: "none",
            transition: "120ms",
            stroke: "transparent",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeWidth: 2,
            width: "2rem",
          }}
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </Box>
        {label && <Box {...label} as="span" sx={{ text: "body" }} />}
      </Box>
    )
  }
)
