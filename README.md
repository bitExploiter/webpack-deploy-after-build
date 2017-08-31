# webpack-deploy-after-build
Copy the dist folder to any other location after build.
<br>
**Usage**
<pre lang="javascript"><code>
WebPackDeployAfterBuild({ from: "Directory", to: "Directory" })
</code></pre> 
<br>
**Install**
</br>
npm install --save webpack-deploy-after-build


**Include in webpack.config.js**

<pre lang="javascript"><code>
var WebPackDeployAfterBuild = require('webpack-deploy-after-build');
</code></pre>            

**add plugin webpack.config.js**
</br>
<pre lang="javascript"><code>
new WebPackDeployAfterBuild({
    from: path.resolve(__dirname, './dist'),
    to: '~/Git/website/assets'
})

</code></pre>
