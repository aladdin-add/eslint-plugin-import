import path from 'path';
import { expect } from 'chai';

const config = require(path.join(__dirname, '../../../eslintrc/typescript'));

describe('eslintrc config typescript', () => {
  // https://github.com/import-js/eslint-plugin-import/issues/1525
  it('should mark @types paths as external', () => {
    const externalModuleFolders = config.settings['import/external-module-folders'];
    expect(externalModuleFolders).to.exist;
    expect(externalModuleFolders).to.contain('node_modules');
    expect(externalModuleFolders).to.contain('node_modules/@types');
  });
});
