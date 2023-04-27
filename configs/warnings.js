/**
 * more opinionated config.
 * @type {Object}
 */
const { rules } = require('../lib/index');

module.exports = {
  plugins: { import: rules },
  rules: {
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 1,
    'import/no-duplicates': 1,
  },
};
