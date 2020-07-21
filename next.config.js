const path = require('path')
const DirectoryNamedPlugin = require('directory-named-webpack-plugin')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  // TODO research target: 'serverless',

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedPlugin({ exclude: /node_modules/ })],
    }

    return config
  },
}

const plugins = [[optimizedImages, {}]]

module.exports = withPlugins([...plugins], nextConfig)
