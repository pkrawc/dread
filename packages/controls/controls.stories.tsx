import { ChangeEvent, FocusEvent, FormEvent, useState } from "react"
import { Box, Container, Grid, Col } from "@dread/layout"
import { Input, Button, Checkbox, Switch } from "./src"
export default { title: "Packages/Controls" }

export function ControlsUsage() {
  const [error, setError] = useState(null)
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
          label="Email"
          name="email"
          error={error}
          onBlur={({ target }: FocusEvent<HTMLInputElement>) => {
            const emailCheck = /^\S+@\S+\.\S+$/
            const validEmail = emailCheck.test(target.value)
            setError(validEmail ? null : "Not a valid email")
          }}
          onFocus={() => setError(null)}
        />
        <Col
          span={[12, 6]}
          as={Input}
          label="Password"
          name="new-password"
          type="password"
          help="Must contain 8 characters and at least 1 number."
        />
        <Col sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Switch label="Get fun emails." />
          <Switch label="Get less fun emails." />
          <Switch label="Get emails that you probably won't like." />
        </Col>
        <Col>
          <Box as="p" sx={{ mb: "1rem", text: "subtitle" }}>
            Accept Dread's terms of service to use our service.
          </Box>
          <Box as="p" sx={{ mb: "2rem" }}>
            By creating an account, you agree to our Terms and Privacy Policy.
            Avail may keep you informed with personalized communications about
            your account and you will be able to opt-out at any time.
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
