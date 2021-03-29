import { forwardRef, InputHTMLAttributes } from "react"
import { Box, SXObject } from "@dread/layout"
import { useCheckbox } from "./use-controls"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  sx?: SXObject
}

export const Checkbox = forwardRef(function Checkbox(
  { sx = {}, ...props }: CheckboxProps,
  ref
) {
  const { checked, wrapperProps, inputProps, label } = useCheckbox({
    ...props,
    ref,
  })
  return (
    <Box
      {...wrapperProps}
      as="label"
      sx={{ position: "relative", display: "inline-flex", gap: "1rem", ...sx }}
    >
      <Box
        {...inputProps}
        as="input"
        type="checkbox"
        hidden
        sx={{ width: 0, height: 0 }}
      />
      <Box
        as="svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        sx={{
          flexShrink: 0,
          height: "calc(2rem - 4px)",
          bg: checked ? "text" : "transparent",
          border: `2px solid transparent`,
          borderColor: "text",
          borderRadius: 2,
          cursor: "pointer",
          width: "calc(2rem - 4px)",
          transition: "120ms",
          stroke: checked ? "bg" : "transparent",
        }}
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </Box>
      {label && <Box as="span">{label}</Box>}
    </Box>
  )
})
