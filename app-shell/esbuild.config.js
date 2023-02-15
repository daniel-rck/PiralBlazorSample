const postcss = require('esbuild-postcss');

module.exports = function (options) {
  options.plugins = options.plugins.filter(x => x.name != 'sass-plugin');
  options.plugins.push(postcss());

  // console.log("esbuild options: ", options);
  return options;
};
