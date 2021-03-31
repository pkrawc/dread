import { FocusEvent, FormEvent, useState } from "react"
import { Box, Container, Grid, Col } from "@dread/layout"
import { Input, Button, Checkbox, Switch, Slider } from "./src"
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
      <Box as="h2" sx={{ mt: "8rem", mb: "4rem" }}>
        Sign up for a new account.
      </Box>
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
          help="Must contain at least 8 characters and at least 1 number."
        />
        <Col sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Switch
            name="email-basic"
            label="Get account updates and new ways to use your account."
          />
          <Switch
            name="email-newsletter"
            label="Get tips and tricks about property management right in your inbox."
          />
          <Switch
            name="email-update"
            label="Get a monthly update about your portfolio."
          />
        </Col>
        <Col>
          <Slider />
        </Col>
        <Col>
          <Box as="p" sx={{ mb: "1rem", text: "subtitle" }}>
            Accept Dread's terms to use our service.
          </Box>
          <Box as="p" sx={{ mb: "2rem" }}>
            By creating an account, you agree to our Terms and Privacy Policy.
            Avail may keep you informed with personalized communications about
            your account and you will be able to opt-out at any time.
          </Box>
          <Checkbox
            name="tos-accept"
            label="I agree to the terms and privacy policy."
          />
        </Col>
        <Col
          sx={{ display: "flex", gap: "2rem", flexDirection: "row-reverse" }}
        >
          <Button variant="primary" type="submit">
            Button Text
          </Button>
          <Button>Secondary Button</Button>
          <Button variant="subtle">Don't click me</Button>
        </Col>
      </Grid>
    </Container>
  )
}
