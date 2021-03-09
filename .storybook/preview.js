import { DreadProvider } from "@dread/layout"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <DreadProvider>
      <Story />
    </DreadProvider>
  ),
]
