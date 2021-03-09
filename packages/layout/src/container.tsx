import styled from "styled-components"
import { sx } from "./dread-provider"

export const Container = styled("section")(
  {
    maxWidth: "calc(var(--base-grid * 80)",
    margin: "0 auto",
    padding: "2rem",
  },
  sx
)
