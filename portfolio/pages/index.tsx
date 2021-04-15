import glob from "glob"
import { Fragment } from "react"
import { GetStaticProps } from "next"
import { Box, Container } from "@dread/core"
import { getMdx } from "@utils/get-mdx"
import { Device } from "@components"

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
          gridTemplateColumns: ["auto", "auto", "minmax(auto, 22rem) 1fr"],
          minHeight: "max(60vh, 30rem)",
          gap: "2rem",
          alignItems: "center",
          my: "2rem",
          perspectiveOrigin: "top left",
          perspective: [0, 0, 500],
        }}
      >
        <Device src="https://dreadful.design/" />
        <Box
          className="hero"
          sx={{
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
            &#128075; I'm Patrick, a <b>Product Developer</b> living in{" "}
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
        <Box as="h2" sx={{ text: "subtitle" }}>
          Current Projects
        </Box>
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
        mx: "-2rem",
        cursor: "pointer",
        transition: "200ms",
        "&:hover": {
          bg: "bgSecondary",
          color: "textSecondary",
          transform: "translateY(-0.5rem) scale(1.025)",
        },
      }}
    >
      <Box as="h3" sx={{ text: "title" }}>
        {headline}
      </Box>
      <Box as="p" sx={{ text: "body", mt: "1rem" }}>
        {description}
      </Box>
    </Box>
  )
}

function Definition({ children, description }: any) {
  return (
    <Box as="span" sx={{ position: "relative" }}>
      <Box as="span">{children}</Box>
      <Box as="aside" sx={{ position: "absolute", top: "100%", left: 0 }}>
        {description}
      </Box>
    </Box>
  )
}
