import { forwardRef, InputHTMLAttributes } from "react"
import { Box, SXObject } from "@dread/core"
import { useCheckbox } from "./use-controls"

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  sx?: SXObject
  label?: string
}

export const Switch = forwardRef(function Switch(
  { sx = {}, ...props }: SwitchProps,
  ref
) {
  const { checked, label, wrapperProps, inputProps } = useCheckbox({
    ...props,
    ref,
  })
  return (
    <Box
      {...wrapperProps}
      as="label"
      sx={{ display: label ? "flex" : "inline-flex", ...sx }}
    >
      {label && (
        <Box as="span" sx={{ mr: "auto" }}>
          {label}
        </Box>
      )}
      <Box
        {...inputProps}
        as="input"
        type="checkbox"
        hidden
        sx={{ width: 0, height: 0 }}
      />
      <Box
        className="track"
        sx={{
          flexShrink: 0,
          width: "4rem",
          height: "2rem",
          bg: checked ? "text" : "bgSecondary",
          borderRadius: "2rem",
          transition: "120ms",
        }}
      >
        <Box
          className="slider"
          sx={{
            width: "calc(2rem - 8px)",
            height: "calc(2rem - 8px)",
            bg: checked ? "bg" : "textSecondary",
            borderRadius: "50%",
            border: "4px solid transparent",
            borderColor: checked ? "text" : "bgSecondary",
            transition: "120ms",
            transform: checked ? "translateX(100%)" : "translateX(0)",
          }}
        />
      </Box>
    </Box>
  )
})
