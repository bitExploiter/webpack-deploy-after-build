# webpack-deploy-after-build
Copy the dist folder to any other location after build.

**Usage**
<pre lang="javascript"><code>
WebPackDeployAfterBuild({ from: "Directory", to: "Directory" })
</code></pre> 

**Install** <br>
<pre lang="bash"><code>
npm install --save webpack-deploy-after-build
</code></pre> 

**Include in webpack.config.js**
<pre lang="javascript"><code>
var WebPackDeployAfterBuild = require('webpack-deploy-after-build');
</code></pre>            

**add plugin webpack.config.js**
</br>
<pre lang="javascript"><code>
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

</code></pre>
