import { forwardRef, InputHTMLAttributes } from "react"
import { Box, SXObject } from "@dread/core"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  sx?: SXObject
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ sx = {}, label, ...props }, ref) {
    return (
      <Box
        as="label"
        sx={{
          position: "relative",
          display: label ? "flex" : "inline-flex",
          gap: "1rem",
          "& input:checked ~ .checkbox": {
            bg: "text",
            stroke: "bg",
          },
          ...sx,
        }}
      >
        <Box {...props} ref={ref} as="input" type="checkbox" hidden />
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
        {label && (
          <Box as="span" sx={{ text: "body" }}>
            {label}
          </Box>
        )}
      </Box>
    )
  }
)
