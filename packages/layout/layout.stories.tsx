import { DreadProvider, Box } from "./src"

export default {
  title: "Packages/Layout",
}

export function ProviderUsage() {
  return <DreadProvider theme={{}} />
}

export function BoxUsage() {
  return <Box sx={{ mt: "4rem" }}>Hello World</Box>
}
