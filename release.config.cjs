/* eslint-disable no-undef */
module.exports = {
    branches: ['master', { name: 'next', prerelease: true }],
    plugins: ['@semantic-release/npm', { pkgRoot: './dist' }],
};
