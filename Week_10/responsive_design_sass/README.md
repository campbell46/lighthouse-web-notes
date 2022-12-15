# Lighthouse Labs | Responsive Design and SASS

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-responsive-design-and-sass/tree/2022.11.22-web-flex-day-19sept2022) | [Vimeo Video Recording](https://vimeo.com/773953625/17eb82fcb6)

* [X] Responsive Design—what is it and why incorporate it?
* [X] Media Queries
* [X] Units in CSS
* [X] Preprocessors
* [X] Writing Sassy CSS (SCSS)

## Responsive Design

What is responsive design? It is an approach to designing web pages in a way that will be displayed or otherwise rendered well on many devices. Whether the device is a phone with limited width, a tablet, or a wide screen plugged into a desktop computer, if you follow this philosophy, measures will be taken to ensure the content is still comfortably viewable and legible. It is important to note that this is not only limited to screens, however. Responsive design also covers special cases like printing of a web page, or how it might be handled by other tools like screen readers (see [accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) considerations for more details on this.)

Using a combination of careful HTML structuring and CSS a web page can achieve excellent usability across many, many devices. In order to be successful in reaching such a goal, there are some CSS capabilities we should have a closer look at:

* Media Queries
* CSS Units

With these technologies in-mind, we are able to have the page adapt based on the current device view-port and medium.

### Media Queries

An example of a media query might be: `@media screen and (min-width: 320px)`

What might that line do? `@media` marks the beginning of a media query. `screen` is the medium... other options (like `print`) exist as well. `(min-width: 320px)` let's the device know that this block of styles should only be applied if the view-port is 320 or more pixels wide. So, all-in-all, the line means: **Please apply the following rules if this device has a screen that is at least 320 pixels wide.**

Consider web sites you've visited recently. Visit once on your desktop computer, and then your phone. Compare what you see. Use of media queries are common in order to achieve many of these dynamic layouts! Resize your browser window in your web browser, see if your favourite websites are able to adjust to keep the content in-sight.

Consider how the page might be used. You can set different, or similar styles, for one or all of: `all`, `print`, `screen`, or `speech`. It is possible additional media types could be added in the future.

### Restricting Elements

We can restrict the width or height of an element using `min-width`, `min-height`, `max-width`, and `max-height`. This can be useful in cases where the container or view-port are expected to change in size.

### Units and Measurements

There are a wide array of units available on the web. One of the most common, which you've likely encountered, is `px`. Many modern screens, especially on phones and Apple devices, have *very* high pixel densities. To combat this and offer a more consistent web experience, devices will set up a ratio representing a certain number of pixels per-inch of screen real-estate. Typically this aims to be about "96px per inch," or as best the display can compensate. While not absolute, or perfect, you'll find that this is quite effective in achieving that goal of consistency.

Here are a few different units of measurement, and how they work:

* `px` A representation of a certain number of pixels per inch of screen.
* `em` A 0-1 percentage representation of the parent's font size.
* `rem` A 0-1 percentage representation of the root element's (`html`) font size.
* `%` Percentage based on parent element size; for font-size it is the same as `em` but in a 0-100 format.
* `ex` Typically a measurement based on the height of the lowercase "x" character in the currently selected font.
* `ch` Typically a measurement based on the width of the zero (0) character in the currently selected font.
* `pt` A point is a physical measurement representing 1/72 of an inch, used in type for printing.
* `pc` A pica is a physical measurement representing 1/36 of an inch, used in type for printing.
* `vw` A percentage (0-100) of the current viewport width.
* `vh` A percentage (0-100) of the current viewport height.
* `vmin` A value representing the smaller of the viewport width or height values.
* `vmax` A value representing the larger of the viewport width or height values.
* `cm`, `mm`, and `in` represent physical measurements in centimetres, millimetres, or inches, respectively, on the screen (or paper, in the case of print.)

As developers we should use the best, most consistent tool for the job. It is usually not appropriate to use printed typeface measurements for a page designed for the web. However, it might become more appropriate if you are writing styles for a printed page. Avoid using `cm`, as an example, for web pages.

## Preprocessors

Preprocessors are a tool that we can use to preprocess or precompile some sort of data into a more practical format. That's a lot of fancy words... how will this apply to us?

Sass, or SCSS, is not a valid web browser language. It is, however, a very developer-friendly and readable format to code in. This language's goal is to help developers more quickly and legibly write their CSS code.

Because web browsers cannot understand this language, however, we have to convert (or compile) it into regular CSS. Thankfully, we dont have to do that by-hand, there is software for this.

Example JavaScript Preprocessors:

* [TypeScript](https://www.typescriptlang.org/) ---> JavaScript
* [CoffeeScript](https://coffeescript.org/) ---> JavaScript

Example CSS Preprocessors:

* [Sass](https://sass-lang.com/) ---> CSS
* [Less](https://lesscss.org/) ---> CSS

## Syntactically Awesome Style Sheets (SCSS / Sass)

### Getting started with Sass

To install Sass as a command-line tool, run: `npm install -g sass`

Note that this installs the tool globally, not just in the current project.

### Sass Syntax Basics

In this program, we'll be focusing on the syntax / formatting afforded to us by `.scss` (there is a `.sass` syntax that is a bit different and excludes most curly braces and semi-colons.)

One of the incredible things about how the `.scss` syntax has been implemented, is that it is 100% compatible with vanilla CSS code. All of your old styles can be pasted in, and it is up to you how many features of Sass you'd like to implement.

### Basic Sass Features

There are a variety of benefits and features that many developers find incredibly useful:

* You can use single-line `//` comments in `.scss` files.
* `@include` Allows you to pull in many files by name/path—they can all be compiled into one final `.css` file for use in your web page.
* CSS blocks can be nested, more closely following your HTML structure.
* `&` can be used in nesting to represent additional selectors applied to the parent selection.
* Variable names begin with a `$`, and can store a property value for use later in your code.
* `@mixin` can be used to store a list of rules / styles; they are capable of accepting a parameter (much like a JS function.)
* To use a mixin, use `@include` followed by the mixin's name.

### Using the Sass Preprocessor Program

In the command line, you'll most often be running the following commands:

* Converts the input `.scss` file, saving the result in a specified `.css` file: `sass input.scss output.css`
* The watch flag allows for `sass` to take notice of changes to your input file(s); each change will result in re-processing and saving of the output `.css` file: `sass --watch input.scss output.css`
* If you want to supress the creation of a `.map` file, there is a flag for that: `sass --no-source-map input.scss output.css`

## Resources

* [Responsive Web Design](https://en.wikipedia.org/wiki/Responsive_web_design)
* [The Difference Between Responsive and Adaptive Design](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)
* [Beyond Media Queries: Using Newer HTML & CSS Features for Responsive Designs](https://css-tricks.com/beyond-media-queries-using-newer-html-css-features-for-responsive-designs/)
* [Responsive Designs and CSS Custom Properties: Building a Flexible Grid System](https://css-tricks.com/responsive-designs-and-css-custom-properties-building-a-flexible-grid-system/)
* [Sass Basics](https://sass-lang.com/guide)
* [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
* [The Lengths [Units] of CSS](https://css-tricks.com/the-lengths-of-css/)
* [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
* [Preprocessor](https://en.wikipedia.org/wiki/Preprocessor)
