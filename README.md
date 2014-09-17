**Notice: Currently Alpha - Actively Finalizing Issues**

## A [Meteor](http://meteor.com) package of [Thoughtbot's](http://thoughtbot.com), Bitters.

**Scaffold styles, variables and structure for Bourbon projects.**

---

Bitters helps designers start projects faster by defining a basic set of Sass variables, default element style and project structure. It’s been specifically designed for use within web applications. Bitters should live in your project’s root Sass directory and we encourage you to modify and extend it to meet your design and brand requirements.

Bitters is made to work alongside a CSS reset and not replace it. Our suggested reset is Normalize.

##Install

1. Make sure to add sass support to your meteor app:

  ```bash
  meteor add fourseven:scss
  ```

2. From within your Meteor app's directory:

  ```bash
  meteor add wolves:bourbon
  ```

3. From within your Meteor app's directory:

  ```bash
  meteor add wolves:bitters
  ```

##Importing

1. Simply import Bourbon at the top of your sass file, then import bitters directly after it (*Currently working on configuring a way to provide a far less verbose import command*):

  ```scss
  @import ".meteor/local/build/programs/server/assets/packages/wolves_bourbon/bourbon"
  @import ".meteor/local/build/programs/server/assets/packages/wolves_bitters/base"
  ```
---

**Important Note** (*working on addressing this*)
Because Meteor will attempt to compile you app's local stylesheets prior to copying the server assets directory, the first time you run the app after installing the package your app will complain that it is unable to find it. For the moment this can be resolved by either stopping and restarting the app, at which point you should no longer get this error message, our running `touch` on you local stylesheet thats attempting to access the package, triggering a reload.

## Using Bitters

### Sass structure & default style
The Bitters directory should contain styles for all the basic elements used throughout the project. It also contains directories for custom mixins and extends for your site as well. Add code to the existing files or add new files to the directories. Customize Bitters for your site as you see fit.

### Variables
This houses all variables that are used, or will be used, in more than one file in your site. Variable names in Bitters that are used outside of the variables file start with `$base` to indicate that they are the most basic variables.

### Grid settings
Variables specifically created for [Neat](http://neat.bourbon.io) resets and breakpoints. To be used, these need to be imported separately from the rest of your base file above Neat in your main stylesheet. Otherwise just remove the file.

### Typography
All type is based on `$base-font-size` which is set to 1em (16px) by default. The spacing around type is based on `$base-line-height` so as to keep a semi-baseline grid. All sizes are scaled up or down by a factor of `.25`.

### Lists
All lists have stripped out styles. No bullets, no left padding. To add back the expected browser default styles add `@extend %default-ul;` or `@extend %default-ol;` to the `<ul>` or `<ol>` respectively.

### Forms
Adds basic styles all form elements. The variables at the top of the file all inherit from the variables file but make it really easy to be overridden.

### Buttons
Basic style for `button` and `input[type="submit"]`. Button style can be changed by setting the `$button-style` variable to one of the [Bourbon](http://bourbon.io) button style [options](http://bourbon.io/docs/#buttons).

### Flashes
Used for any error, warning or success messages in applications or forms. Specifically made for [Ruby on Rails](http://rubyonrails.org) application notices.

## The Bourbon family

- [Bourbon](http://bourbon.io): A simple and lightweight mixin library for Sass
- [Neat](http://neat.bourbon.io): A lightweight semantic grid framework for Sass and Bourbon
- [Bitters](http://bitters.bourbon.io): Scaffold styles, variables and structure for Bourbon projects
- [Refills](http://refills.bourbon.io): Prepackaged patterns and components, built on top of Bourbon, Bitters & Neat

## Credits

![thoughtbot](http://thoughtbot.com/images/tm/logo.png)

Bourbon is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Tweet your questions or suggestions to [@bourbonsass](https://twitter.com/bourbonsass) and while you’re at it follow us too.

## License

Copyright © 2011–2014 [thoughtbot, inc](http://thoughtbot.com). Bourbon is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).
