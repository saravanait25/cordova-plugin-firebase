var helper = require("./crashlytics/ios/helper");

module.exports = function(context) {
  console.log('here', context);
  var xcodeProjectPath = helper.getXcodeProjectPath();
  console.log(xcodeProjectPath);
  helper.ensureRunpathSearchPath(context, xcodeProjectPath);
}