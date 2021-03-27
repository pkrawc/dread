import { Container } from "@dread/layout"
import { Input, Button } from "./src"
export default { title: "Packages/Controls" }

export function InputUsage() {
  return (
    <Container sx={{ mt: "2rem" }}>
      <Input label="Label" />
    </Container>
  )
}

export function ButtonUsage() {
  return (
    <Container sx={{ mt: "2rem" }}>
      <Button>Button Text</Button>
    </Container>
  )
}
