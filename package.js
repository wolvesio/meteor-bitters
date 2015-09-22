Package.describe({
  name: "wolves:bitters",
  summary: "Meteor 1.2.0+ - Scaffold styles, variables and structure for Bourbon projects.",
  version: "3.0.0",
  git: "https://github.com/wolvesio/meteor-bitters"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');
  api.use('fourseven:scss@3.2.0');
  api.addAssets('scss.json', 'server');
  api.addAssets([
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
  ], 'server');
});
