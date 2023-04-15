# releases-lab
Casos de uso para releases e deploys


Configure o commit lint

npm install --save-dev @commitlint/config-conventional @commitlint/cli

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npm install husky --save-dev

npx husky install

npx husky add .husky/commit-msg  'npx --no-install commitlint --edit "$1"'

commitlint.config.js

```js

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [0, 'always', 72],
        'body-min-length': [0, 'always', 10],
        'type-enum': [0, 'always', ['chore', 'feat', 'fix', 'refactor', 'docs', 'perf', 'style', 'test', 'build', 'ci', 'revert']],
        'type-case': [0, 'always', 'lowerCase']
    }
}


```

npm install --save-dev semantic-release


npm install -D  @semantic-release/git

npm i -D @semantic-release/commit-analyzer @semantic-release/release-notes-generator

npm i -D @semantic-release/changelog