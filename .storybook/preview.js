import { DreadProvider } from "@dread/layout"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  backgrounds: {
    default: "light",
    values: [
      { name: "app", value: "#f3f3f3" },
      { name: "light", value: "#fff" },
      { name: "dark", value: "#2d2d2d" },
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
