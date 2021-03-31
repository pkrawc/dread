import { Box, SXObject } from "@dread/layout"
import { wrapEvent } from "@dread/utils"
import { InputHTMLAttributes } from "react"

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  sx?: SXObject
}

export function Slider({ sx, ...props }: SliderProps) {
  return (
    <Box as="label" sx={sx}>
      <Box as="input" type="range" hidden />
      <Box className="track"></Box>
    </Box>
  )
}

function useSlider({ ref, value, onChange, ...props }: any) {
  function handleChange() {}
  return {
    wrapperProps: { ref },
    inputProps: {
      ...props,
      value,
      onChange: wrapEvent(onChange, handleChange),
    },
  }
}
