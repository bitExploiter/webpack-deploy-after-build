'use strict';
var ncp = require('ncp').ncp;

function WebPackDeployAfterBuild(options) {
    var defaultOptions = {

    };

    this.options = Object.assign(defaultOptions, options);
}

WebPackDeployAfterBuild.prototype.apply = function(compiler) {
    const options = this.options;

    compiler.plugin("done", (stats) => {
        console.log(Object.keys(stats.compilation.assets));
    console.log("\nExecuting Deploy on done...");
    ncp(options.from, options.to, function(err) {
        if (err) {
            console.error("Err in ncp check the paths");
        }
        console.log(`Finished deploying ${options.from} to ${options.to}`);
    });
});

    compiler.plugin("after-emit", (compilation, callback) => {
        console.log(Object.keys(compilation.assets));
    console.log("\nExecuting Deploy on after-emit...");
    ncp(options.from, options.to, function(err) {
        if (err) {
            console.error("Err in ncp");
        }
        console.log(`Finished deploying ${options.from} to ${options.to}`);
        callback();
    });
});
};

module.exports = WebPackDeployAfterBuild;