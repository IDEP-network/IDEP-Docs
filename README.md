# IDEP Docs

IDEP Docs was built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Getting the repository

```console
git clone https://github.com/IDEP-network/IDEP-Docs.git
```

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.


:exclamation: :exclamation: ### You need to build your changes before you commit to the repository for the updates to take effect :exclamation: :exclamation:

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
