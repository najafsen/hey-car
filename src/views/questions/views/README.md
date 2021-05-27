# Polls!

This is a sample app to works with polls. To access hosted version of the app [Click here!](https://hey-car.netlify.app/)

## Installation

Simply clone the project and install dependencies using `yarn`.

## Contribution

- **Running the app locally:** Use `yarn start` to run the application
- **Running Tests:** Use `yarn test`
- **Building the app:** Use `yarn build` command to build the app into `build` folder
- **Commits:** Use [Conventional commits](https://www.conventionalcommits.org/) for you commit messages. Both your commits and pull-requests' titles should follow conventional commit messages rules. There are status checks on PRs to verify commit message and PR title. We can configure github to prevent merging PRs not passing conventional messages checks. These commits are currently used to create Github releases and update the changelog (See `CHANGELOG.md, and github releases).
- **Deploy**: The app will be deployed once you merge a PR to master branch. All commits currently trigger deploy, but it can be configured to only deploy on particular commit types. (Another benefit of conventional commit messages.)

## Packages and tools

- **Netlify:** Used for hosting the app
- **redux-devtools**: Used for working with redux in type-safe manner
- **Github Actions**: Used for CI (running tests, checking commit messages and PR titles, running `semantic-release`)
- **semantic-release**: Used for creating Github releases and generating changelog based on commit messages. This can also be used for deploying the app on specific types of commits. BTW, it's more useful on auto-versioning and auto-publishing npm packages. (I've set it up for one of our npm packages in my current job.)
- **prettier**: Used for formatting documents. However, it doesn't run on husky nor CI yet.
- **styles-components**: Used as CSS-in-JS lib. It's my very first time using it, so don't blame me if it's not good! :D
