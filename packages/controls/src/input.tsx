import { Box } from "@dread/layout"
import { CSSObject } from "@styled-system/css"
import { InputHTMLAttributes } from "react"
import { useInput } from "./use-controls"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  sx?: CSSObject
}

export function Input(props: InputProps) {
  const { label, error, raised, errorProps, inputProps } = useInput(props)
  return (
    <Box as="label" sx={{ position: "relative" }}>
      <Box as="span">{label}</Box>
      <Box {...inputProps} sx={{ position: "absolute", p: "2rem" }} />
      {error && <Box {...errorProps}>{error}</Box>}
    </Box>
  )
}
