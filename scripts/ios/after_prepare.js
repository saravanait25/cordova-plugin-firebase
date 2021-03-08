var helper = require("./helper");

module.exports = function(context) {
  var xcodeProjectPath = helper.getXcodeProjectPath(context);
  helper.ensureRunpathSearchPath(context, xcodeProjectPath);
}