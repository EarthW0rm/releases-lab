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

npm install --save-dev semantic-release  @semantic-release/git @semantic-release/commit-analyzer @semantic-release/release-notes-generator @semantic-release/changelog


npm i -D semantic-release-config-gitmoji

npm i -D semantic-release-gitmoji

npm install --save-dev @commitlint/config-angular


brew install gitmoji

gitmoji -c

https://www.conventionalcommits.org/en/v1.0.0/#summary

https://engineeringfordatascience.com/posts/gitmoji/#:~:text=You%20can%20add%20emojis%20to,message%20summary%20%2D%20cool%2C%20right%3F


https://www.npmjs.com/package/commitlint-config-gitmoji

NOva versao 

Nova versao feature

break
1
2
3
minor
 new minor





nova feature
feature 4
