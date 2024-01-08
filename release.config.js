module.exports = {
    branches: ['master'],
    repositoryUrl: 'https://github.com/vitalik203/Currency-Converter.git',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      {
        // Custom configuration for @semantic-release/git plugin
        "assets": ["CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      },
      '@semantic-release/github',
      '@semantic-release/npm',
    ],
  };
  