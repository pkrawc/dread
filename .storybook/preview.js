import { DreadProvider } from "@dread/layout"
import "./storybook-reset.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  backgrounds: {
    default: "light",
    values: [
      { name: "app", value: "#E0E0E0" },
      { name: "light", value: "#F2F2F2" },
      { name: "dark", value: "#222222" },
    ],
  },
}

export const decorators = [
  (Story) => (
    <DreadProvider>
      <Story />
    </DreadProvider>
  ),
]
