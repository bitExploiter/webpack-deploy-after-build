# webpack-deploy-after-build
Copy the dist folder to any other location after build.

**Usage**
```js
WebPackDeployAfterBuild({ from: "Directory", to: "Directory", clearDestDir: true })
```

**Install**

```shell
npm install --save webpack-deploy-after-build
```

**Include in webpack.config.js**
```js
var WebPackDeployAfterBuild = require('webpack-deploy-after-build');
```

**Add plugin webpack.config.js**
```js
var path = require('path')
var webpack = require('webpack')
var WebPackDeployAfterBuild = require('webpack-deploy-after-build');

module.exports = {

};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new WebPackDeployAfterBuild({
            from: path.resolve(__dirname, './dist'),
            to: '~/Git/website/vue/'
        })
    ])
}
```
