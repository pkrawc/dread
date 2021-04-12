import { Fragment } from "react"
import { Box, Container, Grid, Col } from "./src"
import { Send } from "react-feather"

export default {
  title: "Packages/Layout",
}

const countries = [
  {
    name: "Sweden",
    distance: "120m",
    description: "Need to fly to Sweden? Get your fit-to-fly status in 2 days.",
  },
  {
    name: "Germany",
    distance: "120m",
    description: "Need to fly to Sweden? Get your fit-to-fly status in 2 days.",
  },
  {
    name: "France",
    distance: "120m",
    description: "Need to fly to Sweden? Get your fit-to-fly status in 2 days.",
  },
]

export function Layout() {
  return (
    <Fragment>
      <Box as="header" sx={{ height: "6rem", bg: "secondary" }} />
      <Container sx={{ mt: "4rem" }}>
        <Grid className="dashboard">
          <Col span={[12, 8]}>
            <Box as="h2" sx={{ text: "title" }}>
              Browse Countries
            </Box>
            <Box as="h4" sx={{ text: "body" }}>
              Discover COVID-19 testing requirements for 100s of destinations.
            </Box>
          </Col>
          <Col
            span={[12, 4]}
            sx={{
              justifySelf: ["start", "end"],
              textAlign: ["left", "right"],
            }}
          >
            <Box sx={{ color: "textSecondary", flexBasis: "100%" }}>
              Filter by test type.
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                text: "small",
                border: ({ colors }) => `2px solid ${colors.primary}`,
                mt: "1rem",
                px: "1rem",
                borderRadius: 4,
                fontWeight: "bold",
              }}
            >
              PCR Fit to Fly
            </Box>
          </Col>
          {countries.map(({ name, distance, description }) => {
            return (
              <Col
                key={name}
                span={[12, 6, 4]}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  border: "1px solid transparent",
                  borderColor: "secondary",
                  p: "2rem",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  rowGap: "1rem",
                }}
              >
                <Box
                  as="img"
                  src={`https://picsum.photos/800/600?random=${name}`}
                  sx={{
                    maxWidth: "calc(100% + 4rem + 2px)",
                    mx: "-2rem",
                    mt: "-2rem",
                    gridColumn: "span 2",
                    aspectRatio: "3/4",
                  }}
                />
                <Box as="h3" sx={{ text: "subtitle" }}>
                  {name}
                </Box>
                <Box
                  sx={{
                    justifySelf: "end",
                    alignSelf: "center",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <Box
                    as={Send}
                    sx={{ width: "1.5rem", color: "textSecondary" }}
                  />
                  <Box as="span">{distance}</Box>
                </Box>
                <Box as="p" sx={{ gridColumn: "span 2", text: "small" }}>
                  {description}
                </Box>
                <Box className="actions" sx={{ gridColumn: "span 2" }}>
                  <Box sx={{ color: "textSecondary" }}>Learn More</Box>
                </Box>
              </Col>
            )
          })}
        </Grid>
      </Container>
    </Fragment>
  )
}

// export function BoxUsage() {
//   return (
//     <Box as="figure" sx={{ mt: "4rem", bg: "ui.300" }}>
//       Hello World
//     </Box>
//   )
// }

// export function ContainerUsage() {
//   return <Container sx={{ mt: "4rem" }}>Hello World</Container>
// }

// export function GridUsage() {
//   const columnStyles = {
//     bg: "ui.300",
//   }
//   return (
//     <Container sx={{ mt: "2rem" }}>
//       <Grid sx={{ minHeight: "calc(100vh - 4rem)" }}>
//         <Col sx={columnStyles} span={6} />
//         <Col sx={columnStyles} span={6} />
//         <Col sx={columnStyles} span={4} />
//         <Col sx={columnStyles} span={4} />
//         <Col sx={columnStyles} span={4} />
//         <Col sx={columnStyles} span={3} />
//         <Col sx={columnStyles} span={3} />
//         <Col sx={columnStyles} span={3} />
//         <Col sx={columnStyles} span={3} />
//       </Grid>
//     </Container>
//   )
// }
