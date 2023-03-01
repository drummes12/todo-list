const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: false,
})

module.exports = withPWA({
  reactStrictMode: true,
})
