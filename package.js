Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.addFiles('wolves:bitters.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('wolves:bitters');
  api.addFiles('wolves:bitters-tests.js');
});
