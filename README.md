## Sup

1. Fork this repository
1. Clone this repository `git clone https://github.com/{YOUR_USERNAME}/coding-challenges.git`
1. Make sure you're on Node v13.
1. Run `npm install` in this repository
1. Download VSCode
1. Install Prettier for VSCode https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
1. Implement challenges/0-hello/hello.js
1. Run `npm test --challenge=hello`
1. Make sure the tests pass!
1. `git remote add upstream {this_repo}` to pull from upstream

## Useful Tips For Testing

1. If you ever want to mess around with your function outside of this environment, just copy and paste the function you wrote into RunJS.
1. A better way to run tests for a single function: `npx jest challenges/5-arraycardio -t "#lastElement"`
1. Generic form of above: `npx jest challenges/{CHALLENGE_FOLDER} -t "#{FUNCTION_NAME}"`
1. If you want to also have the tests auto-reload on save, do the above command but add `--watch`

## Getting new Exercises

1. Make sure you're on your fork and have upstream and origin configured to point to the right places. `upstream` should point to slushyash/coding-challenges, and `origin` should point to `your-username/coding-challenges`.
1. Run `git pull upstream/master --rebase`
1. If you run into a conflict, ask for help.
