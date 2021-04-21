import { Box, Container } from "@dread/core"
import Link from "next/link"

export function SiteHeader() {
  return (
    <Container sx={{ display: "flex", my: "2rem" }}>
      <Link href="/">
        <Box as="a">Dreadful.</Box>
      </Link>
    </Container>
  )
}
