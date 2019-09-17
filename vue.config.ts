import { config } from './graphqlTransform';

module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  },
  configureWebpack: {
    plugins: [config]
  },
  transpileDependencies: ['vuex-persist']
};
