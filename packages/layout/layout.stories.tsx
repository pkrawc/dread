import { Box, Container, Grid, Col } from "./src"

export default {
  title: "Packages/Layout",
}

export function BoxUsage() {
  return (
    <Box as="figure" sx={{ mt: "4rem", bg: "ui.300" }}>
      Hello World
    </Box>
  )
}

export function ContainerUsage() {
  return <Container sx={{ mt: "4rem" }}>Hello World</Container>
}

export function GridUsage() {
  const columnStyles = {
    bg: "ui.300",
  }
  return (
    <Container sx={{ mt: "2rem" }}>
      <Grid sx={{ minHeight: "calc(100vh - 4rem)" }}>
        <Col sx={columnStyles} span={6} />
        <Col sx={columnStyles} span={6} />
        <Col sx={columnStyles} span={4} />
        <Col sx={columnStyles} span={4} />
        <Col sx={columnStyles} span={4} />
        <Col sx={columnStyles} span={3} />
        <Col sx={columnStyles} span={3} />
        <Col sx={columnStyles} span={3} />
        <Col sx={columnStyles} span={3} />
      </Grid>
    </Container>
  )
}
