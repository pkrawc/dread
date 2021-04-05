import { useEffect } from "react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { initialize, pageview } from "react-ga"
import { DefaultSeo } from "next-seo"
import { DreadProvider } from "@dread/core"
import seo from "seo.config"
import "styles/base.css"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    initialize("UA-112946294-4")
    router.events.on("beforeHistoryChange", (url) => pageview(url))
  }, [])
  return (
    <DreadProvider>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </DreadProvider>
  )
}
