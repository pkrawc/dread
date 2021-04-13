import { Fragment } from "react"
import {
  default as NextDoc,
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class Document extends NextDoc {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRender = context.renderPage
    try {
      context.renderPage = () =>
        originalRender({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await NextDoc.getInitialProps(context)
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#07456f" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..600&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
