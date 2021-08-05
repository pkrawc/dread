import * as fs from "fs"
import matter from "gray-matter"

function formatPath(path: string) {
  return path.replace(/\.\/src\/content/, "").replace(/\.mdx/, "")
}

export function getMdx(files: string[]) {
  return files.map((file: string) => {
    const slug = formatPath(file)
    const source = fs.readFileSync(file, "utf-8")
    const { data, content } = matter(source)
    return { content, data, slug }
  })
}
