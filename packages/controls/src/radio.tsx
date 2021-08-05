import { forwardRef, InputHTMLAttributes, memo } from "react"
import { Box, SXObject } from "@dread/core"

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  sx?: SXObject
}

export const Radio = memo(
  forwardRef<HTMLInputElement, RadioProps>(function Radio(props, ref) {
    return (
      <Box
        as="label"
        sx={{
          position: "relative",
          "& input:checked ~ .radio-button": {
            bg: "text",
            borderColor: "text",
          },
        }}
      >
        <Box {...props} as="input" type="radio" ref={ref} hidden />
        <Box
          role="radio"
          className="radio-button"
          sx={{
            blockSize: "2rem",
            inlineSize: "2rem",
            bg: "transparent",
            border: "2px solid transparent",
            borderColor: "textSecondary",
            borderRadius: "50%",
          }}
        />
      </Box>
    )
  })
)
