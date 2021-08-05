import { Box, Container } from "@dread/core"
import Link from "next/link"
import { ActiveLink } from "@components"

const activeLinkStyles = {
  color: "primary",
  fontWeight: "black",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  "&.active": {
    color: "secondary",
  },
}

export function SiteHeader() {
  return (
    <Container sx={{ display: "flex", my: "2rem" }}>
      <Link href="/">
        <Box
          as="a"
          sx={{ cursor: "pointer", "&:hover": { color: "secondary" } }}
        >
          Dreadful.
        </Box>
      </Link>
      <Box
        sx={{
          ml: "auto",
        }}
      >
        <ActiveLink href="/system">
          <Box as="a" sx={activeLinkStyles}>
            Dread System
          </Box>
        </ActiveLink>
      </Box>
    </Container>
  )
}
