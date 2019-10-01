import { config } from './graphqlTransform';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

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
  devServer: {
    public: '<docker_host_external_ip>:8080'
    // watchOptions: {
    //   ignored: /node_modules/,
    //   aggregateTimeout: 300,
    //   poll: 1000
    // }
  },
  transpileDependencies: ['vuex-persist']
};
