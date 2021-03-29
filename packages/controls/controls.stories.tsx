import { ChangeEvent, FocusEvent, FormEvent, useState } from "react"
import { Box, Container, Grid, Col } from "@dread/layout"
import { Input, Button, Checkbox, Switch } from "./src"
export default { title: "Packages/Controls" }

export function ControlsUsage() {
  const [error, setError] = useState(null)
  const errorText = `
    Wrong first name.
  `
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const formData = Object.fromEntries(new FormData(target))
    console.log(formData)
  }

  return (
    <Container sx={{ mt: "2rem" }}>
      <Grid as="form" onSubmit={handleSubmit}>
        <Col
          span={[12, 6]}
          as={Input}
          label="First Name"
          name="first-name"
          error={error}
          onBlur={({ target }: FocusEvent<HTMLInputElement>) => {
            setError(target.value.length ? errorText : null)
          }}
          onFocus={() => setError(null)}
        />
        <Col
          span={[12, 6]}
          as={Input}
          label="Last Name"
          name="last-name"
          help="Enter your last name."
        />
        <Col sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Switch label="Get fun emails." />
          <Switch label="Get less fun emails." />
          <Switch label="Get emails that you probably won't like." />
        </Col>
        <Col>
          <Box as="p" sx={{ mb: "1rem", text: "subtitle" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Box>
          <Box as="p" sx={{ mb: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, earum
            odit doloremque hic velit officiis! Fugiat laudantium commodi dolore
            ipsum voluptate eveniet autem, fugit adipisci corporis nam eius?
            Impedit, eos!
          </Box>
          <Checkbox
            name="tos-accept"
            label="I agree to the terms and privacy policy."
            onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
              console.log(target.checked)
            }}
          />
        </Col>
        <Col sx={{ display: "flex", gap: "2rem" }}>
          <Button variant="primary" type="submit">
            Button Text
          </Button>
          <Button>Secondary Button</Button>
        </Col>
      </Grid>
    </Container>
  )
}

export function ButtonUsage() {
  return (
    <Container sx={{ mt: "2rem" }}>
      <Button>Button Text</Button>
      <Button variant="primary">Button Text</Button>
      <Button variant="subtle">Button Text</Button>
    </Container>
  )
}
