var helper = require("./crashlytics/ios/helper");

module.exports = function(context) {
  var xcodeProjectPath = helper.getXcodeProjectPath(context);
  helper.ensureRunpathSearchPath(context, xcodeProjectPath);
}