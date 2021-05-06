const { spawn } = require("child_process")
const { writeFileSync, readdirSync, renameSync } = require("fs")
const { cp } = require("shelljs")

const packageName = process.argv[2]

if (!packageName) throw Error("Must contain a name argument.")

const description =
  process.argv[3] || `Dread design system package for ${packageName}`

const packageJson = `
{
  "name": "@dread/${packageName}",
  "version": "0.0.1",
  "description": "${description}",
  "source": "src/index.ts",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "esmodule": "dist/index.modern.js",
  "types": "dist/index.d.ts",
  "files": [ "dist" ],
  "scripts": {
    "test": "jest",
    "build": "rm -rf dist && microbundle --jsx React.createElement",
    "build:dev": "microbundle --no-compress --jsx React.createElement",
    "prepare":"npm run build",
    "watch": "microbundle watch --no-compress --jsx React.createElement",
    "watch:test": "jest --watch"
  },
  "publishConfig": {
    "access": "public"
  },
  "author": "Patrick <patrick@dreadful.design>",
  "license": "GPL-3.0",
  "peerDependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "styled-components": "^5.2.1"
  }
}
`

const packages = readdirSync("./packages")

if (!packages.includes(packageName)) {
  console.log(`Creating file structure for ${packageName}...`)
  cp("-r", "template", `packages/${packageName}`)
  writeFileSync(`packages/${packageName}/package.json`, packageJson)
  renameSync(
    `packages/${packageName}/package.stories.tsx`,
    `packages/${packageName}/${packageName}.stories.tsx`
  )
  renameSync(
    `packages/${packageName}/package.test.ts`,
    `packages/${packageName}/${packageName}.test.ts`
  )
  spawn("lerna", ["bootstrap"], {
    stdio: "inherit",
  })
}
