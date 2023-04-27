/**
 * Rules in progress.
 *
 * Do not expect these to adhere to semver across releases.
 * @type {Object}
 */

const { rules } = require('../lib/index');

module.exports = {
  plugins: { import: rules },
  rules: {
    'import/no-deprecated': 1,
  },
};
