import { useRouter } from "next/router"
import { Box } from "@dread/core"

export default function Project() {
  const {
    query: { slug },
  } = useRouter()
  return <Box>{slug}</Box>
}
