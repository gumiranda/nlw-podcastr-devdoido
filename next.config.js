/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['storage.googleapis.com']
  },
  future: {
    webpack5: true
  }
});
