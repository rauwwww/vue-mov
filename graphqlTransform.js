// 1. import `getTransformer` from the module
var getTransformer = require('ts-transform-graphql-tag').getTransformer

// 2. create a transformer and add getCustomTransformer method to the loader config
export const config = {
    // ...
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                // ... other loader's options
                getCustomTransformers: () => ({
                    before: [getTransformer()]
                })
            }
        }]
    }
    // ...
};