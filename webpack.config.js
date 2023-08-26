const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@fortawesome/fontawesome-free$'] = path.resolve(
      __dirname,
      'node_modules/@fortawesome/fontawesome-free/js/all.js'
    );
    return config;
  },
};