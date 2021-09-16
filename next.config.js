const fonts = require('next-fonts');
const images = require('next-images');
const plugins = require('next-compose-plugins');

module.exports = plugins([
  [fonts, { enableSvg: true }],
  [images],
], {
  eslint: {
    ignoreDuringBuilds: true,
  },
});
