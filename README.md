# webpack-deploy-after-build
Copy the dist folder to any other location after build.

**Install**</br>
npm install --save webpack-deploy-after-build


**Include in webpack.config.js**

<pre>var WebPackDeployAfterBuild = require('webpack-deploy-after-build');</pre>

**add plugin webpack.config.js**
<pre>
new WebPackDeployAfterBuild({
            from: path.resolve(__dirname, './dist'),
            to: '~/Git/website/assets'
        })

</pre>
