import { Fragment } from "react"
import glob from "glob"
import { GetStaticProps } from "next"
import { Box, Container } from "@dread/core"
import { getMdx } from "@utils/get-mdx"

function getTime(dateString: string) {
  return new Date(dateString).getTime()
}

interface Project {
  slug: string
  title: string
  description: string
  headline: string
}

type StaticProps = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async function (
  context
) {
  const projects = getMdx(glob.sync("content/projects/*.mdx"))
  const projectList = projects
    .sort((a, b) => getTime(b.data.date) - getTime(a.data.date))
    .map(({ data: { title, description, headline }, slug }) => ({
      title,
      description,
      headline,
      slug,
    }))
  return {
    props: {
      projects: projectList,
    },
  }
}

export default function HomePage({ projects }: { projects: Project[] }) {
  return (
    <Fragment>
      <Container
        as="section"
        sx={{
          display: "grid",
          gridAutoFlow: "dense",
          gridTemplateColumns: "minmax(auto, 22rem) 1fr",
          height: "max(60vh, 30rem)",
          gap: "2rem",
          alignItems: "center",
          my: "2rem",
        }}
      >
        <Box className="device" sx={{ gridColumn: ["span 2", "span 1"] }} />
        <Box
          className="hero"
          sx={{
            gridColumn: ["span 2", "span 1"],
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box as="h1" sx={{ text: "hero" }}>
            Dreadful Design
          </Box>
          <Box as="h2" sx={{ text: "subtitle" }}>
            Experiences that are <s>un</s>forgettable.
          </Box>
          <Box as="p">
            &#128075; I'm Patrick, a <b>Product Engineer</b> living in{" "}
            <b>Chicago</b>. My focus is on progressive web apps. You can mess
            around with some of my experiments to the left or check out some of
            my products in the wild below.
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          mt: "2rem",
          mb: "8rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {projects.map((project) => (
          <Project key={project.slug} {...project} />
        ))}
      </Container>
    </Fragment>
  )
}

function Project({ slug, headline, description }: Project) {
  return (
    <Box
      key={slug}
      sx={{
        borderRadius: 4,
        p: "2rem",
        cursor: "pointer",
        transition: "200ms",
        "&:hover": {
          bg: "bgSecondary",
          color: "textSecondary",
        },
      }}
    >
      <Box as="h3" sx={{ text: "title" }}>
        {headline}
      </Box>
      <Box as="p" sx={{ text: "body" }}>
        {description}
      </Box>
    </Box>
  )
}
