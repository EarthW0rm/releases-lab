const path = require('path')
const fs = require('fs')

const tplFile = path.resolve(__dirname, '.gitmoji/release-notes.hbs')
const commitTemplate = path.resolve(__dirname, '.gitmoji/commit-template.hbs')

module.exports = {
    branches: [
        "main",
        "next",
        "next-major",
        {
            "name": "beta",
            "prerelease": true
        },
        {
            "name": "alpha",
            "prerelease": true
        }
    ],
    plugins: [
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "docs/CHANGELOG.md",
                "changelogTitle": "# Changelog\n\nRegistro de Alterações: Mantenha-se Atualizado com as Últimas Novidades e Melhorias!"
            }
        ],
        [
            'semantic-release-gitmoji',
            {
                releaseRules: {
                    patch: {
                        include: [':bento:', ':arrow_up:', ':lock:'],
                        partials: { commitTemplate },
                        helpers: {
                            datetime: function (format = 'UTC:yyyy-mm-dd') {
                              return dateFormat(new Date(), format)
                            }
                        },
                    },
                },
                releaseNotes: {
                    template: fs.readFileSync(tplFile, 'utf-8'),
                }
            }
        ],
        '@semantic-release/github',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                message: [
                    ':bookmark: chore: release v${nextRelease.version} [skip ci]'
                ].join('\n')
            }
        ]
    ]
}