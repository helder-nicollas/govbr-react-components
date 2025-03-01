/* eslint-disable no-undef */
module.exports = {
    branches: ['master', { name: 'next', prerelease: true }],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/npm',
            {
                pkgRoot: 'dist',
            },
        ],
    ],
};
