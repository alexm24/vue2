const globalDefinitions = {
  __PRODUCTION_STAND_TYPE__: process.env.VUE_APP_STAND_TYPE === 'production',
  __STAGING_STAND_TYPE__: process.env.VUE_APP_STAND_TYPE === 'staging',
  __DEVELOP_STAND_TYPE__: process.env.VUE_APP_STAND_TYPE === 'develop',
  __LOCAL_STAND_TYPE__: !['production', 'staging', 'develop'].includes(
    process.env.VUE_APP_STAND_TYPE
  ),
  __DEV__: process.env.NODE_ENV === 'development',
  __COMMIT__: JSON.stringify(process.env.VUE_APP_COMMIT_HASH),
  __VERSION__: JSON.stringify(process.env.VUE_APP_TAG),
  __PIPELINE_URL__: JSON.stringify(process.env.VUE_APP_PIPELINE_URL),
  __RELEASE_TIME__: JSON.stringify(process.env.VUE_APP_RELEASE_TIME),
  __STAND_TYPE__: JSON.stringify(process.env.VUE_APP_STAND_TYPE)
}

module.exports = {
  transpileDependencies: ['/node_modules/@mts-ui/'],
  devServer: {
    proxy: {
      '^/api/v1': {
        target: 'http://localhost:4000'
      },
      '^/api': {
        target: 'http://localhost:3000'
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0] = Object.assign(definitions[0], globalDefinitions)
      return definitions
    })
    config.plugin('html').tap((definitions) => {
      definitions[0].title = 'Video Platform'
      return definitions
    })
    return config
  }
}
