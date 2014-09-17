Package.describe({
  name: "wolves:bitters"
  summary: "Meteor 0.9.x - Scaffold styles, variables and structure for Bourbon projects.",
  version: "0.1.0",
  git: "https://github.com/wolvesio/meteor-bitters"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('fourseven:scss@0.9.5');
});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('wolves:bitters');
  // api.addFiles('wolves:bitters-tests.js');
});
