import { createGlobalStyle, css } from "styled-components"

export const Base = createGlobalStyle(
  ({ theme: { space, fontSizes, fonts, lineHeights } }) => css`
    :root {
      font-size: ${space[2]}px;
    }
    * {
      box-sizing: border-box;
    }
    html,
    body,
    div,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    li,
    aside,
    section,
    main,
    header,
    footer,
    img,
    picture,
    figure,
    input,
    button,
    select {
      margin: 0;
      padding: 0;
    }
    html,
    body {
      block-size: 100%;
      inline-size: 100%;
    }
    body {
      --base-size: ${space[2]}px;
      font-size: ${fontSizes.body};
      line-height: ${lineHeights.body};
      font-family: ${fonts.body};
    }
    pre,
    code {
      font-family: ${fonts.monospace};
    }
    h1 {
      font-size: ${fontSizes.hero};
    }
    h2 {
      font-size: ${fontSizes.headline};
    }
    h3 {
      font-size: ${fontSizes.title};
    }
    h4 {
      font-size: ${fontSizes.subtitle};
    }
    h5 {
      font-size: ${fontSizes.body};
      font-weight: "bold";
    }
  `
)
