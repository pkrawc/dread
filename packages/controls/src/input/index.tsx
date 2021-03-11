import { Box } from "@dread/layout"
import { useInput } from "./use-input"

export function Input(props: any) {
  const htmlProps = useInput(props)
  return <Box {...htmlProps} />
}
