# Slack client

The purpose of this client is to accept arguments from the command line and update the status of a slack user.

## Usage

**Pre-requisites:**

1. Have `yarn` installed
1. Have `nvm` installed

**Building & running:**

1. Run `nvm use`
1. Run `yarn install`
1. Run `yarn build`
1. Run `yarn update-slack-status`

## Obtaining a slack token

1. Go to: https://api.slack.com/apps
1. Create a modern app
1. Under OAuth & Permissions > Scopes > User Token Scopes, make sure the following scopes are set:
    - `users.profile:write`
1. Install the app to your workspace
