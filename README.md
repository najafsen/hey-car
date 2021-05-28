# Polls!

This is a sample app to works with polls. To access hosted version of the app [Click here!](https://hey-car.netlify.app/). Resize the browser window, or open/install the app on your phone to see how it looks on the phone.

## Notes

- "Details page" does not 100% match the design, because when I was developing that page, the url for designs was returning "504" error.
- As unfortunately, I'm very busy these days (also missed the weekend because of vacation) I couldn't add good amount of tests, but tried to add different types of them to showcase how I write tests.

## Folder structure

The folder structure is recursive. All dumb/reusable components go into `components` folder, and all routed components go under `views` folder. Other folders are straightforward. The same structure can appear under each folder. For example we have `components` folder under `views/questions`, which contains dumb/reusable components that are only needed in `questions` domain. There can be `utils`, `types`, etc. under `views/questions` as well.

## Contribution

- **Running the app locally:** Use `yarn start` to run the application
- **Running Tests:** Use `yarn test`. Unfortunately, the test coverage is not decent. However, I tried to add at least one test to different types of files or components. So, you get the idea of how I write tests.
- **Building the app:** Use `yarn build` command to build the app into `build` folder. Perhaps you won't need to run this locally.
- **Commits:** Use [Conventional commits](https://www.conventionalcommits.org/) for you commit messages. Both your commits and pull-requests' titles should follow conventional commit messages rules. There are status checks on PRs to verify commit message and PR title, so that if you haven't used proper commit/pr message, you won't be able to merge your PR. These commits are currently used to create Github releases and update the changelog (See `CHANGELOG.md`, and github releases).
- **Deploy**: The app will be deployed once you merge a PR to master branch. All commits currently trigger deploy, but it can be configured to only deploy on particular commit types. (Another benefit of conventional commit messages.)

## Packages and tools

- **Netlify:** Used for hosting the app
- **redux-devtools**: Used for working with redux in type-safe manner
- **Github Actions**: Used for CI (running tests, checking commit messages and PR titles, running `semantic-release`)
- **semantic-release**: Used for creating Github releases and generating changelog based on commit messages. This can also be used for deploying the app on specific types of commits. BTW, it's more useful on auto-versioning and auto-publishing npm packages. (I've set it up for one of our npm packages in my current job.)
- **prettier**: Used for formatting documents. However, it doesn't run on husky nor CI yet.
- **styles-components**: Used as CSS-in-JS lib. It's my very first time using it, so don't blame me if it's not good! :D
