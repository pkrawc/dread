# Dread Design System

## Project Structure

### `/Packages`

The packages folder contains each `@dread` ui package. Together they make up the dreadful design system.

## Usage

## Contributing

## Support

## Publishing

Publishing is done manually but in the future will be automated by github actions. There are two steps to releasing an update to any package(s).

```zsh
yarn graduate
```

Update versions for any packages that have changes to their git history since the last publish. This should update both the package.json and the CHANGELOG.md file for each updated package.

```zsh
yarn release
```

Publish all updated pacakges to the npm registry based on new version numbers.
