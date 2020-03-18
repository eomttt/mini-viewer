module.exports = {
  webpack: (config, {
      isServer
  }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        'fs-extra': 'empty'
      }
    }
    return config
  }
}
