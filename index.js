'use strict';

const { existsSync, statSync, readdirSync } = require('fs');

module.exports = sizeOnDisk;

function sizeOnDisk(path) {
  if (!path) {
    throw new Error('MissingPath: path is a required parameter');
  }

  if (!existsSync(path)) {
    throw new Error(`PathDoesNotExist: ${path}`);
  }

  const stats = statSync(path);
  let total = stats.size;

  if (stats.isFile()) {
    return total;
  }

  readdirSync(path).map(e => {
    const size = sizeOnDisk(`${path}/${e}`);
    total += size;
  });

  return total;
}
