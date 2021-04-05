import { createGlobalStyle, css } from "styled-components"

export const Base = createGlobalStyle(
  ({ theme }) => css`
    :root {
      font-size: ${theme.space[2]}px;
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
      width: 100%;
      height: 100%;
    }
    body {
      --base-size: ${theme.space[2]}px;
      font-size: ${theme.fontSizes.body};
      font-family: ${theme.fonts.body};
    }
    pre,
    code {
      font-family: ${theme.fonts.monospace};
    }
  `
)
