[![Bitters](http://images.thoughtbot.com/bourbon/bitters-logo.svg)](http://bitters.bourbon.io)

## A [Meteor](http://meteor.com) package of [Thoughtbot's](http://thoughtbot.com), Bitters.

**Scaffold styles, variables and structure for Bourbon projects**

---

[Bitters](http://bitters.bourbon.io) helps designers start projects faster by defining a basic set of Sass variables, default element style and project structure. It’s been specifically designed for use within web applications. Bitters should live in your project’s root Sass directory and we encourage you to modify and extend it to meet your design and brand requirements.

Bitters is made to work alongside a CSS reset and not replace it. Our suggested reset is Normalize.

##Install

1. Make sure to add sass support to your meteor app:

  ```bash
  meteor add fourseven:scss
  ```

2. From within your Meteor app's directory (Bitters relies on Bourbon):

  ```bash
  meteor add wolves:bourbon
  ```

3. From within your Meteor app's directory:

  ```bash
  meteor add wolves:bitters
  ```

##Usage

1. Simply import Bourbon at the top of your sass file, then import bitters directly after it

  `*.scss`
  ```scss
  @import "{wolves:bourbon}/bourbon";
  @import "{wolves:bitters}/base";
  ```
  `*.sass`
  ```sass
  @import {wolves:bourbon}/bourbon
  @import {wolves:bitters}/base
  ```

2. When using Neat, uncomment the following line in `.meteor/local/build/programs/server/assets/packages/wolves_bitters/bitters/_base.scss`:

  ```scss
  @import "grid-settings";
  ```

  And import Neat after Bitters in your `application.scss` or main stylesheet file:

  ```scss
  @import "{wolves:bourbon}/bourbon";
  @import "{wolves:bitters}/base";
  @import "{wolves:neat}/neat";

  // All other imports
  ```

  If you want to use Neat functions in Bitters, you can `@import "grid-settings";` before Neat, remove `@import "grid-settings";` from `.meteor/local/build/programs/server/assets/packages/wolves_bitters/bitters/_base.scss` and import the rest of bitters after. For example:

  ```scss
  @import "{wolves:bourbon}/bourbon";
  @import "{wolves:bitters}/bitters/grid-settings";
  @import "{wolves:neat}/neat";
  @import "{wolves:bitters}/base";

  // All other imports
  ```

---

## Using Bitters

### Sass structure & default style
The Bitters directory should contain styles for all the basic elements used throughout the project. It also contains directories for custom mixins and extends for your site as well. Add code to the existing files or add new files to the directories. Customize Bitters for your site as you see fit.

### Variables
This houses all variables that are used, or will be used, in more than one file in your site. Variable names in Bitters that are used outside of the variables file start with `$base` to indicate that they are the most basic variables.

### Grid settings
Variables specifically created for [Neat](http://neat.bourbon.io) resets and breakpoints. To be used, these need to be imported separately from the rest of your base file above Neat in your main stylesheet. Otherwise just remove the file.

### Typography
All type is based on `$base-font-size` which is set to 1em (16px) by default. The spacing around type is based on `$base-line-height` so as to keep a semi-baseline grid. All sizes are scaled up or down by a factor of `0.25`.

### Lists
All lists have stripped out styles. No bullets, no left padding. To add back the expected browser default styles add `@extend %default-ul;` or `@extend %default-ol;` to the `<ul>` or `<ol>` respectively.

### Forms
Adds basic styles all form elements. The variables at the top of the file all inherit from the variables file but make it really easy to be overridden.

### Buttons
Basic style for `button` and `input[type="submit"]`. Base button styles can be
changed by modifying the styles applied to `button` and `#{$all-button-inputs}`
in `base/_button.scss`.

## The Bourbon family

- [Bourbon](https://github.com/thoughtbot/bourbon): A simple and lightweight mixin library for Sass
- [Neat](https://github.com/thoughtbot/neat): A lightweight semantic grid framework for Sass and Bourbon
- [Bitters](https://github.com/thoughtbot/bitters): Scaffold styles, variables and structure for Bourbon projects
- [Refills](https://github.com/thoughtbot/refills): Prepackaged patterns and components built with Bourbon, Neat and Bitters

## License

Copyright © 2013–2015 [thoughtbot, inc](http://thoughtbot.com). Bitters is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).

## About thoughtbot

![thoughtbot](https://thoughtbot.com/logo.png)

Bitters is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.
