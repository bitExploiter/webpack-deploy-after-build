'use strict';
const ncp = require('ncp').ncp;
const del = require('del');

function WebPackDeployAfterBuild(options) {
    var defaultOptions = {
        clearDestDir: false,
    };

    this.options = Object.assign(defaultOptions, options);
}

WebPackDeployAfterBuild.prototype.apply = function(compiler) {
    const options = this.options;

    compiler.plugin("done", (stats) => {
        console.log(Object.keys(stats.compilation.assets));
        console.log("\nExecuting Deploy on done...");
        if (options.clearDestDir) {
            del.sync([`${options.to}/*`], {force: true});
        }
        ncp(options.from, options.to, function(err) {
            if (err) {
                console.error("Err in ncp check the paths");
            }
            console.log(`Finished deploying ${options.from} to ${options.to}`);
        });
    });
    
};

module.exports = WebPackDeployAfterBuild;
