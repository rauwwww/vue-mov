import { config } from './graphqlTransform';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  },
  configureWebpack: {
    plugins: [config, new ForkTsCheckerWebpackPlugin()]
  },
  transpileDependencies: ['vuex-persist']
};
