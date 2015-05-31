Package.describe({
  name: "wolves:bitters",
  summary: "Meteor 0.9.3+ - Scaffold styles, variables and structure for Bourbon projects.",
  version: "2.1.2",
  git: "https://github.com/wolvesio/meteor-bitters"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('fourseven:scss@3.1.1');
  api.addFiles('scss.json', 'server');
  api.addFiles([
    // Variables
    "bitters/_variables.scss",
    // Typography and Elements
    "bitters/_typography.scss",
    "bitters/_forms.scss",
    "bitters/_tables.scss",
    "bitters/_lists.scss",
    "bitters/_buttons.scss",
    "bitters/_grid-settings.scss",
    "bitters/_base.scss"
  ], 'server', {isAsset: true});
});
