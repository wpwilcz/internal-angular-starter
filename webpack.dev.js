const {AngularCompilerPlugin} = require('@ngtools/webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  plugins: [
    new AngularCompilerPlugin({
      "mainPath": "main.ts",
      "platform": 0,
      "hostReplacementPaths": {
        "environments\\environment.ts": "environments\\environment.prod.ts"
      },
      "sourceMap": true,
      "tsConfigPath": "src\\tsconfig.app.json",
      "compilerOptions": {}
    })
  ]
});
