module.exports = {
  branches: ['main', { name: 'next', prerelease: true }], // Пример веток
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md', // Имя файла Changelog в целевом репозитории
    }],
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md'], // Какие файлы коммитить после обновления (в целевом репо)
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    '@semantic-release/github'
  ]
  // Важно: здесь мы не указываем repositoryUrl, так как он будет определяться динамически.
};
