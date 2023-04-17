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
            "@semantic-release/commit-analyzer",
            {
                "releaseRules": [
                    {
                        "type": "feat",
                        "release": "minor"
                    },
                    {
                        "type": "docs",
                        "scope": "ADR",
                        "release": "minor"
                    },
                    {
                        "type": "docs",
                        "release": "patch"
                    },
                    {
                        "type": "fix",
                        "release": "patch"
                    },
                    {
                        "type": ":bug: fix",
                        "release": "patch"
                    },
                    {
                        "type": "perf",
                        "scope": "ci",
                        "release": "patch"
                    },
                    {
                        "type": "perf",
                        "scope": "cd",
                        "release": "patch"
                    }
                ],
                "parserOpts": {
                    "noteKeywords": [
                        "BREAKING CHANGE",
                        "BREAKING CHANGES"
                    ]
                }
            }
        ],
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "docs/CHANGELOG.md",
                "changelogTitle": "# Changelog \n\nRegistro de Alterações: Mantenha-se Atualizado com as Últimas Novidades e Melhorias!"
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": ["docs/CHANGELOG.md"]
            }
        ],

        [
            "@semantic-release/github",
            {
                "assets": false
            }
        ],
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                message: [
                    'chore: release v${nextRelease.version} [skip ci]'
                ].join('\n')
            }
        ]
    ]
}