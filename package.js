Package.describe({
  name: "wolves:bitters",
  summary: "Meteor 1.0.0+ - Scaffold styles, variables and structure for Bourbon projects.",
  version: "0.9.0",
  git: "https://github.com/wolvesio/meteor-bitters"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.0');

  api.addFiles('scss.json', 'server');
  
  api.addFiles([
    // Variables
    "bitters/_variables.scss",
    // Extends
    "bitters/extends/_button.scss",
    "bitters/extends/_clearfix.scss",
    "bitters/extends/_errors.scss",
    "bitters/extends/_flashes.scss",
    "bitters/extends/_hide-text.scss",
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
