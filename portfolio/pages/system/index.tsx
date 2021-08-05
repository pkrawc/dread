import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import glob from "glob"
import { Container, Box, Grid, Col } from "@dread/core"
import * as controls from "@dread/controls"
import { getMdx } from "@utils/mdx"

export async function getStaticProps() {
  const systemPages = getMdx(glob.sync("src/content/system/**/*.mdx"))
  const systemPageSlugs = systemPages.map(({ slug }) => slug)
  const introPage = systemPages.find((page) =>
    page.slug.includes("getting-started")
  )
  const mdx = await serialize(introPage.content)
  return { props: { content: mdx, pages: systemPageSlugs } }
}

export default function DesignSystemPage({ content }) {
  return (
    <Container>
      <MDXRemote
        {...content}
        components={{ Box, Container, Grid, Col, ...controls, PitchCard }}
      />
    </Container>
  )
}

function PitchCard({ children, ...props }) {
  return (
    <Col
      {...props}
      sx={{
        position: "relative",
        border: (theme) => `2px solid ${theme.colors.primary}`,
        borderRadius: 4,
        p: "2rem",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "-0.75rem",
          borderWidth: "0.75rem",
          borderStyle: "solid",
          borderColor: "muted",
          borderRadius: 4,
          zIndex: -1,
        },
      }}
    >
      {children}
    </Col>
  )
}
