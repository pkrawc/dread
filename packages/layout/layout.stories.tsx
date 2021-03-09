import { DreadProvider, Box, Container } from "./src"

export default {
  title: "Packages/Layout",
}

export function BoxUsage() {
  return <Box sx={{ mt: "4rem", bg: "ui.300" }}>Hello World</Box>
}

export function ContainerUsage() {
  return <Container sx={{ mt: "4rem" }}>Hello World</Container>
}
