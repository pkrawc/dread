import { useEffect } from "react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { initialize, pageview } from "react-ga"
import { DefaultSeo } from "next-seo"
import { DreadProvider } from "@dread/core"
import seo from "../seo.config"
import "@styles/base.css"
import { SiteHeader } from "@components"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    initialize("UA-112946294-4")
    router.events.on("beforeHistoryChange", (url) => pageview(url))
  }, [])
  return (
    <DreadProvider
      theme={{
        style: "rounded",
        fonts: { body: "Crimson Pro", monospaced: "IBM Plex Mono" },
        space: [0, 8, 16, 32, 48],
        containerSize: "60rem",
        fontWeights: {
          light: 200,
          regular: 400,
          bold: 600,
          black: 800,
        },
      }}
    >
      <DefaultSeo {...seo} />
      <SiteHeader />
      <Component {...pageProps} />
    </DreadProvider>
  )
}
