# Contributing to radical-insight
Everyone is welcome to contribute to the radical-insight project! Please do so using GitHub issues. There are two types of issues used in the radical-insight project: defects and features. If the software is not behaving as intended, please submit a defect by opening an issue and prepending `[defect]` to the title. If you have a suggestion for an enhancement or believe some functionality was overlooked, submit a feature by opening an issue and prepending `[feature]` to the title. Miscellaneous behind-the-scenes updates (e.g. dependency update or logging clean-up) should be prepended with `[tech-debt]`.

## Submitting a defect
When submitting a defect, please include the following information:
1. Environment. Including OS and version, browser and browser version, and any other background info that may be relevant.
1. Expected behavior.
1. Actual behavior.
1. Steps to reproduce. Be as detailed as possible in your steps.

If the defect cannot be reliably reproduced it will be tagged "CNR." Radical-insight committers will periodically revisit "CNR" defects and delete them at their own discretion.

## Submitting a feature
All feature requests made in good faith will be considered and discussed. Unfortunately, not every feature request can or will be implemented, but we do want people engaged in the project. One way to let us know you are here and have great ideas is to request new features.

## Contributing code
Everyone is welcome to contribute code! To keep the project and process clean, there are a few formalities to abide by, so please follow this step-by-step guide.
1. Find an open issue to resolve or create your own new one.
1. Fork this repo to your GitHub account.
1. Create a feature branch to make your changes. Please reference the issue in your branch name for clarity (e.g. `git checkout -b issue120-fix-request-headers`).
1. Write code.
1. Write tests.
1. Run tests.
1. Commit your changes. Please be somewhat detailed in your commit message. Limit the first line of your message to 50 characters and all subsequent lines to 72 characters. This helps keep the git logs readable when using the command line.
1. Rebase with `master` because you never know.
1. Run tests again because you never know.
1. Push your changes.
1. Submit a PR by going to https://github.com/[you]/radical-insight.git and clicking "Pull Request."

When approved, your pull request will be integrated with the `master` branch by a committer.
