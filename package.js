Package.describe({
  name: "wolves:bitters",
  summary: "Meteor 0.9+ - Scaffold styles, variables and structure for Bourbon projects.",
  version: "0.1.1",
  git: "https://github.com/wolvesio/meteor-bitters"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('fourseven:scss@1.0.0');
  api.addFiles([
    // Variables
    "_variables.scss",
    // Extends
    "extends/_button.scss",
    "extends/_clearfix.scss",
    "extends/_errors.scss",
    "extends/_flashes.scss",
    "extends/_hide-text.scss",
    // Typography and Elements
    "_typography.scss",
    "_forms.scss",
    "_tables.scss",
    "_lists.scss",
    "_buttons.scss",
    "_grid-settings.scss",
    "_base.scss"
  ], 'server', {
    isAsset: true
  });
});
