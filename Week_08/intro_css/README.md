# Lighthouse Labs | Introduction to CSS

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-intro-to-css/tree/2022.11.08-web-flex-day-19sept2022) | [Vimeo Video Recording](https://vimeo.com/768712729/f9b304a279)

* [X] CSS' Place on the Web
* [X] What is CSS?
* [X] HTML Basics
* [X] Semantic HTML
* [X] How to add CSS to a Web Page
* [X] Selectors
* [X] Basic CSS Rules
* [X] Box Model
* [X] Flexbox Basics

## What is the web made of?

The typical web page readable by your web browser can be composed of:

1. HTML (Hypertext Markup Language): Page content.
2. CSS (Cascading Style Sheets): Defines the appearance of the aforementioned content.
3. JS (JavaScript): In-page logic, allowing for an interactive user-interface.

These three languages offer enough power and flexibility to support the web pages you use on a daily basis! Everything from a profile on Facebook to search page on Google are composed of these three components. Each of these three pieces, as we've seen in our exploration of node.js and its Express package, can be served from a web server to a client (often a web browser.) Today, we'll be examining the HTML and CSS pieces of the puzzle!

## What is CSS?

CSS, or cascading style sheets, represent rules for how content in a web page are expected to display. The reason for this name, is that if you assign two (or more) competing rules to the same content, the last one defined will win (thus the term: **cascade.**)

We'll find when coding using web languages, we often have the luxury of writing basic text files, both HTML and CSS are no different! A very basic project folder could contain the following files:

```
CSS Example Project
├index.html
└main.css
```

Of course, much like in our experience with node.js, for these files to be be considered valid and run as expected, *we* are expected to follow their syntax (rules and grammar.) It also helps to organize your project and separate certain types of resources. A larger website might have a layout more like the following:

```
Larger Web Site
├┬css
│├contact.css
│└main.css
├┬js
│└app.js
├┬img
│├logo.png
│├waving-cat.gif
│└welcome.jpeg
├about.html
├contact.html
├index.html
└services.html
```

Note how many developers will separate their CSS files into a `css` folder, their JS files into a `js` folder, etc. This helps the developer, and their team if applicable, to quickly locate the resources they are looking for. Note this helps even more if the project gains more resources like fonts, videos, audio files, PDFs, Word documents, and more. Organization becomes more and more critical the more a project grows in complexity, always keep this in mind as a core consideration. It is often best to plan ahead and start with strong organization from the beginning to save yourself from struggling at a later date. Depending on the team you're working with, the names of these folders and files may vary, so always consult your team to ensure you are using the same approach and to avoid confusion.

Most web server software will serve the `index.html` file by default, so this is usually the home page by convention.

## HTML Basics

To be considered valid, web pages should always contain the following:

```HTML
<html>
 <head></head>
 <body></body>
</html>
```

That's fine and dandy, but what does it all mean!? Before showing the more detailed snippet, please note that the comment syntax in HTML is:

```HTML
<!-- This is an HTML comment. -->
<!-- HTML comments begin with angle bracket, exclamation mark, and two hyphens: <!-- -->
<!-- They end with two hyphens and a closing angle bracket: -->
<!-- Content in an HTML comment can be
many,
many

lines! -->
```

Alright, now let's break down the basic web page:

```HTML
<html><!-- All web page elements MUST be enclosed in the <html> opening, and </html> closing tags. -->
 <head></head><!-- All configuration code should be inside the HEAD element; this stuff doesn't show in the web page. -->
 <body></body><!-- All content rendered in the web page should be in the BODY; this is everything you see and interact with! -->
</html>
```

### A Better Boilerplate

Now, for your web page to be set up in a more modern, HTML5-compliant manner, make the following additions:

```HTML
<!DOCTYPE html><!-- Tells the browser this is, in fact, an HTML document. This line implies we are using HTML5. -->
<html lang="en"><!-- A language attribute lets the browser know which language the page is written in. -->
<head>
 <meta charset="UTF-8"><!-- For text characters to be handled appropriately, we should always define a character set (usually UTF-8.) -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- This line is to make Internet Explorer / Edge know we are building a modern web page. -->
 <meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Sets a scale for media queries (mobile/responsive CSS.) -->
 <title>Document</title><!-- The title of the page; appears in the tab at the top of your browser window. -->
</head>
<body>
 <!-- Your web page content goes here! -->
</body>
</html>
```

Much better... this should allow us to more reliably use modern web elements and features across different web browsers.

### Common HTML Elements

There are many HTML elements available to us for use in semantically organizing our web content. It is up to us as developers to keep an open mind, do research, and decide upon the most appropriate element for the job in each case. Here is a basic web page with some sample content to show you some of the most common:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>CSS Experiment</title>
</head>
<body>
 <h1>CSS Experiment</h1>
 <p>Today we'll be experimenting with CSS. Among other concepts, we're covering:</p>
 <ul>
 <li>HTML</li>
 <li>CSS</li>
 </ul>
</body>
</html>
```

* H1-H6: Headings; should contain text describing what content follows each.
* P: Paragraph; standard text content throughout a web page.
* UL: Unordered list; a list of data in no particular order.
* LI: List item; the only valid direct child of `UL` or `OL`, used to differentiate between each item in a list.

### Semantic HTML

As pages get larger, there are more decisions to be made on which elements belong where, if at all. Consider the following HTML snippet:

```HTML
<div>
 <a href="#placeholder">Home</a> | <a href="#placeholder">Contact</a>
</div>
<div>
 <div>
 Please attend <span>Roger's birthday party</span>! It is <span>very</span> important to us.
 </div>
</div>
<div>
 <div>As a side-note, cheese is awesome.</div>
</div>
<div>
 <div>&copy; 2022; Lighthouse Labs</div>
</div>
```

What do `<div>` and `<span>` mean? Nothing, really, they are essentially placeholder or organizational elements. They are easy for us to target with CSS, and are commonplace in examples across the web (it is ***your*** job to replace example HTML with better elements!)

The sample above is a *very* bad case of `<div>`-itis. Now, there are plenty of improvements that could be made to the snippet, but take a moment to think of some elements you could swap out to make it more descriptive. [This list](https://www.w3schools.com/html/html5_semantic_elements.asp) of elements would be a great place to start for ideas.

The following, without *adding* additional elements (which would be a good idea) is a set of swaps that would be considered a much more descriptive and semantic snippet:

```HTML
<nav>
 <a href="#placeholder">Home</a> | <a href="#placeholder">Contact</a>
</nav>
<main>
 <p>
 Please attend <time datetime="2022-06-23">Roger's birthday party</time>! It is <strong>very</strong> important to us.
 </p>
</main>
<aside>
 <p>As a side-note, cheese is awesome.</p>
</aside>
<footer>
 <p>&copy; 2022; Lighthouse Labs</p>
</footer>
```

In real web pages, there should be more headings, and some other elements in there, but let the above serve as a huge reminder that there are a *lot* of elements at our disposal and `<div>` should **never** be our first instinct! There is almost always a better choice.

## How to Include CSS in a Web Page

There are three main ways of including your CSS styles in a web page. We'll start with how **not** to do things. There are real use-cases for all three, but *usually* it is third option that you'll end up using in the real-world:

* The `style` HTML element attribute.
* The `<style>` HTML element.
* Via the `<link>` element (placed in the `<head>` portion of a web page.)

### HTML Style Attribute

In a pinch, elements can individually be given styles:

```
<p style="color: red;">
 My paragraph!
</p>
```

This is not a very maintainable way to manage your code though. Imagine you had some navigation HTML that is used on thirty-two different web pages, and you wanted to change a style. Now you must track down that piece in each and every file and ensure it is changed properly. Maybe even that wouldn't be so bad if there is only one style, like the above, but what if things get more complex?

```
<p style="color: red; font-weight: bold; box-shadow: 0 0 3px rgba(40, 20, 20, 0.75);">
 My paragraph!
</p>
```

This approach becomes unwieldy quickly, proving not only difficult to maintain but difficult to read. It is recommended this be avoided in most cases.

### HTML Style Element

This next method of including styles in our files falls victim to similar issues as the previous, but is a little better.

```HTML
<style type="text/css">
 p {color: red;}
</style>
<p>My paragraph!</p>
<p>Another paragraph!?</p>
<p>Yet another paragraph...</p>
```

An advantage that this approach has over the `style` attribute is that your rules can now affect multiple elements. If the above is pasted into the `<body>` element of a web page, every `<p>` in the page will feature red text instead of just one. Note that this still leaves you prone to difficulty locating your styles across a web page, and offers you no way to easily include your styles in multiple pages.

### The Link Element

Finally, the recommended way of doing things! The `<link>` element allows you to include an instruction in your web page that a browser will understand. This instruction is to download and use a particular stylesheet for this page. With this approach, you are able to separate your CSS code into one or more files separate from your web page, and re-use this code across many web pages. Benefits to this approach include:

* Avoid render-blocking (show content right away!)
* Re-use styles across many web pages (DRY code.)
* Separation of concerns / organization.

Let's assume our project set-up looks something like...

```
Sample Project
├┬css
│└my-css.css
└my-web-page.html
```
In our `/css/my-css.css` file, we'll add:

```CSS
p {color: red;}
```

And in our `/my-web-page.html` file, we'll add:

```HTML
<html>
 <head>
 <!-- Stylesheet(s): -->
 <link rel="stylesheet" type="text/css" href="./css/my-css.css">
 </head>
 <body>
 <p>My paragraph!</p>
 </body>
</html>
```

Be careful that your `<link>` elements have a valid `rel`, or your browser won't know that it is a *stylesheet* you're trying to load! Another common mistake is the `href` attribute... you must make sure that it is a **valid** path to an *existing* document. It is easy to accidentally point nowhere, to an incorrect file, or simply type in the wrong file/directory name(s)!

## Separation of Concerns

There exists a concept in web development referred to often as the "separation of concerns." This means that files and code with specific purposes or goals should be separated. This not only reduces the file size of individual files involved, but it offers far improved organization in most cases. This allows us, as mentioned earlier in our folder structure examples, to more easily locate where portions of our projects are.

Note how even a small project becomes easier to understand in latter, rather than the former example:

```
All-in-One Approach
└index.html
```

```
Separation of Concerns
├┬css
│└styles.css
├┬js
│└scripts.css
└index.html
```

Just because we *can* include our styles all in one file, doesn't mean we should. As that file grows it will only become harder and harder to understand and maintain. Breaking things down keeps it simpler to read and find what we're looking for!

As the types of projects you work on grow, and grow, and grow, any of these files could end up featuring hundreds (if not thousands) of lines each. Splitting them up will make your life *much* easier.

## Anatomy of CSS Rules

To help you read and write CSS rules, it is important to become familiar with the syntax. Consider the following CSS rule:

```CSS
/* Make paragraphs red and indent them by 16 pixels. */
p {
 color: red;
 text-indent: 16px;
}
```

What exactly is going on here?

### Anatomy

#### Comments

There is only one valid comment syntax available in CSS, and you've likely come across it in your JavaScript journey already! Each comment should begin with a `/*` and end with a `*/`. CSS comments can span one or more lines if/as needed. In the above example, our comment was:

```CSS
/* Make paragraphs red and indent them by 16 pixels. */
```

#### Selectors

In the above example we have a rule. Each rule should begin with a **selector**, this tells the browser *what* we want to apply styles to. The simplest selector is the element selector. Simply type in the name of an element's tag, and all matches in your HTML will be styled accordingly. For the above we are targeting paragraphs: `p`.

#### Code Blocks

We can apply one or more rules / styles to elements found by our selector. These styles are groups in a block, marked by curly braces: `{}`.

#### Rules

Each individual style, or rule, is composed of two pieces: a property and its value.

##### Properties

In a code block different visual properties of the matching element(s) can be defined. We start each rule with a property name. In our example we are modifying all paragraphs' `color` and `text-indent` properties.

##### Values

Properties require a value. Between each property name and its value, you'll find a colon: `:`. The format of the value will vary wildly depending on the property you are setting, so you'll need to refer to documentation on a case-by-case basis for that. Some properties allow multiple formats and/or values, be careful you are formatting them as the browser will expect.

In the example, values include `red` and `16px`.

To tell the browser you are ending your property value, terminate your rule with a semi-colon: `;`.

### Putting it All Together

1. `p` Selector.
2. `{` Open a code block for rules.
3. `color:` Choose a property to set.
4. `red;` Set a value and end your line with a semi-colon.
5. `}` End your code block.

A generic pseudo-code breakdown would look as follows:

```CSS
SELECTOR {
 property1: value1;
 property2: value2;
 property3: value3;
}
```

## How do you know what CSS to use?

The short answer: you don't. Not at the start.

### Becoming an Effective CSS Programmer

With JavaScript, you probably find you can write some code and follow logical patterns to get the result you're looking for. By trial and error you can come to solutions, only looking for a function in the language documentation occasionally.

Unforunately, CSS isn't so intuitive. There are core rules and common property value formats, but because web designs vary greatly and CSS has hundreds, if not thousands, of available properties to use the first while using this language will involve a *lot* of searching.

With any language, it is important to find documentation resources that you understand and trust. With CSS, it becomes **essential**. A few excellent resources include the [Mozilla Development Network](https://developer.mozilla.org/en-US/docs/Web/CSS) and [W3Schools](https://www.w3schools.com/css/default.asp). Both of these together have comprehensive coverage of *every* CSS property you can use. A more easily digestable resource, however, is the popular [CSS Tricks](https://css-tricks.com/) website. It has detailed guides complete with diagrams, sketches, and code snippets that in most cases will have you writing CSS in no time.

### Trial and Error

Remember in node.js how to see if we're getting the result we expect we often `console.log()` values everywhere? This same spirit of trial and error will exist in your time with CSS as well... but perhaps to an even greater degree. It is important to get familiar with your browser web developer tools. It is recommended, if you plan on developing web pages, that you install the most popular browsers for testing and compatibility purposes.

### Browser Compatibility

Back in the 1990s and 2000s, the browser wars were in full-force. Modern web browsers continue to fight for market share to this day, but the war was different back then. In the earliest of days, each popular browser would develop its own HTML, CSS, and JavaScript features... meaning that web developers had to decide if they were making their website once, twice, thrice, or who knows how many times to ensure that it would run on all environments! Big companies often opted to ONLY write code for Internet Explorer, or Netscape, etc. to save time and money. It was also difficult, in general, to keep up with browser changes back then.

Thankfully, almost all features are standardized now thanks to the [W3C (World Wide Web Consortium)](https://www.w3.org/). The W3C is an international community that works together to create and maintain standards for the web. Modern browsers are *expected* to follow its guidelines to ensure that HTML, CSS, and JS (along with other technologies) can be written and behave in a reliable manner.

This means that these days it is much, *much*, ***much*** easier to write code and have it run in all browsers. For newer JavaScript and CSS features, however, it is still a good idea to get familiar with tools like [Can I use...](https://caniuse.com/) that offer a very accessible way to check which browsers have implemented certain features. Find out which versions and which browsers are most commonly used to access your clients' websites and ensure that your approach will work for them.

In the workplace compatibility can still be a headache if companies either decide to use, or are forced to use, old and outdated web browsers. Though uncommon, you may even run into organizations that use Netscape or Internet Explorer! These can be difficult to support, as you'll lose plenty of features, comforts, and cross-compatibilities that are afforded to us by more modern browsers.

As far as HTML is concerned, many semantic elements are quite new. Should you need to write HTML that is truly backward compatible back to 1999, consider researching [XHTML](https://www.w3schools.com/html/html_xhtml.asp).

## Block and Inline Elements

The two most common "types" of elements we see in web pages are considered to be block and inline. Block elements are seen moreso as "containers," and are usually full-page-width by default. Think a `<p>` element, for example. Paragraphs are meant to contain text content and other elements.

Inline elements are meant to be embedded within text content, think an `<a>` (anchor / hyperlink) element. Such an element should be inside of a paragraph or other "block level" element. The same goes for `<strong>`, `<em>`, `<img>`, and many other elements.

Note that inline elements adopt the `width` and `height` of their content directly, and are not compatible with the `padding` properties. This makes inline elements far more restrictive than block elements in terms of what you can control.

CSS is very powerful though. Always use the most semantic HTML in your web page, because you can actually overwrite this behaviour when needed using: `display: block;` and `display: inline;`. If you ever need one to *look* and *act* like the other, CSS is capable of flipping their behaviours! Again, write semantic HTML, and worry about looks only in CSS!

## Box Model

A fundamental of CSS is the [box model](https://www.w3schools.com/css/css_boxmodel.asp). This determines how measurements are made and defined for each element in a web page. The layers of an element are laid out as such (from inside to outside):

1. Content
2. Padding
3. Border
    * (*Outline*)
    * (*Box-Shadow*)
4. Margin

Most browser dev tools reveal a visual representation of this model when you inspect elements in web pages for your convenience.

Try the following code to try out each of these pieces:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>The Box Model</title>
</head>
<body>
 <h1>The Box Model</h1>
</body>
</html>
```

```CSS
h1 {
 /* Note where the element's background begins and ends in the browser. */
 background: salmon;

 /* Content */
 width: 480px;
 height: 240px;

 /* Padding */
 padding-top: 32px;
 padding-right: 32px;
 padding-bottom: 32px;
 padding-left: 32px;

 /* Border */
 border-top: 64px solid yellow;
 border-right: 64px solid red;
 border-bottom: 64px solid blue;
 border-left: 64px solid green;

 /* Margin */
 margin-top: 96px;
 margin-right: 96px;
 margin-bottom: 96px;
 margin-left: 96px;
}
```

Inspect the page using your browsers web developer tools, and see if you can identify these styles and the pieces of the box model.

You can do a lot, just with this knowledge!

### Content-Box versus Border-Box

What is the *actual total* width and height of the `h1` we were working on? Well, you might guess the `width` and `height` we entered in our CSS. That's not quite right... the space the element actually takes up is...

* ***Width:*** `width` + (horizontal) `padding` + (horizontal) `border`
* ***Height:*** `height` + (vertical) `padding` + (vertical) `border`

So, if you're not careful, you end up with a situation like this:

* Expected Width: `480px` | Actual Width: `672px`
* Expected Height: `240px` | Actual Height: `432px`

In order to figure out your widths and heights this way, you'll need to remember to take out a notepad or a calculator and proceed with your code very carefully.

By default `padding` and `border` add on to our element's width. This can make it difficult to know how wide our final element will be... especially when trying to fit elements beside each other in more complex layouts. There is a CSS property that we can use to change this behaviour, and you'll find that many websites use this, and many developers favour it.

Right now the element we'd been experimenting on uses: `box-sizing: content-box;`. We didn't write that, but browsers most often set defaults. It has become the standard for this to be the default. Like any default, we can of course, write our own rules to overwrite it.

Try adding this property to the element: `box-sizing: border-box;`.

With `box-sizing: border-box;` the `width` and `height` properties are *inclusive* of padding and border. This makes it much easier to ensure your elements are of the intended dimensions. **Careful to use `width`s and `height`s that leave enough space for your `padding` and `border`s when using `box-sizing: border-box;`!**

## Browser Defaults

Some defaults we can expect most, if not all, browsers will always agree on... like `box-sizing: content-box;`. But many others, we can't be sure they'll have settled on the same default. This can be cause for issues with your web page looking the same between browsers. Thankfully, as these are just default values and not features, we can just override the defaults and all browsers will have the same starting point for our web page's look. This makes our life a lot easier, and we won't have to worry so much about fighting defaults as we work on styling.

Don't know where to start in writing an override of all the defaults that'll likely interfere with your goals?

That's fair, and everyone has been there. In fact, most people are still there! Why re-invent the wheel? There are "browser reset" or "browser default" stylesheets out there written by people who have taken the time to find and overwrite common problem defaults.

Most developers grab a reset stylesheet from one of the following:

* [CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
* [Normalize.css](https://necolas.github.io/normalize.css/)

Make including either of these in your code a step in your **every** web project, they're lifesavers!

## How is CSS Parsed?

There are some key concepts that must be grasped to understand why your styles behave the way they do. As your stylesheets grow in number and complexity, they become more and more important in order for you to achieve the results you are hoping for.

* Cascade (last matching rule wins)
* Specificity (most specific rule wins)

CSS files are read from first-to-last and each are read top-to-bottom. Should multiple conflicting rules be defined for the same element of equal specificity, the last one will be applied. Consider the following simple example:

```CSS
p {color: red;}

p {color: blue;}
```

Because `blue` is the last colour set to apply to `p`, it will be the one applied. The exception arises if a more specific selector is used. Let's assume the following HTML:

```HTML
<p class="my-class">This is a paragraph!</p>
```

If we want most paragraphs to be blue, but *that* one to be red, we can be more *specific* in our selectors:

```CSS
/*
The addition of the class makes this more specific!
Despite not coming first in the file, this rule will beat any lonely "p" selection.
*/
p.my-class {color: red;}

p {color: blue;}
```

Order matters, but so too does how specific you are in your selections! If you don't see the style you expect, return to these key principles. [CSS Tricks has a great guide](https://css-tricks.com/specifics-on-css-specificity/) on how specificity is calculated so you can have a deeper understanding of what will beat what in this game of rock, paper, scissors!

## Common Selectors

There are [a lot of selectors](https://css-tricks.com/almanac/selectors/) available, but the first ones you'll want to get familiar with before adding complexity are:

* Element Selectors (the name of the element)
* Child Selectors (a space between two selectors implies the latter is nested *inside* the former)
* Class Selectors (a `.` proceeding a class name)
* ID Selectors (a `#` proceeding an ID)

Assume a web page's body contains the following HTML:

```HTML
<h1 id="my-heading">Hello, World!</h1>
<p>This is a basic example of some HTML for styling target practice.</p>
<p class="special-paragraph">Maybe the second paragraph should have purple text?</p>
<p>If so, the rest can be green, except for this <a href="#">link.</a></p>
<p>What a great way to experiment! Practice makes perfect when it comes to CSS.</p>
<p class="special-paragraph">Classes are great because they can be re-used.</p>
<h2>Cool Search Engines</h2>
<ul>
 <li>Bing</li>
 <li><a href="https://duckduckgo.com/">DuckDuckGo</a></li>
 <li>Google</li>
</ul>
```

How might you target various elements here?

```CSS
/* Octothorpes / hashtags / pound-signs are used to match with IDs. */
#my-heading {
 color: salmon;
}

/* Periods are used to match with classes. */
.special-paragraph {
 color: purple;
}

/* Targets all paragraphs. */
p {
 color: green;
}

/* Targets anchors (links) INSIDE OF paragraphs. */
p a {
 color: orange;
 background: black;
}
```

### Multiple Selectors

If you find you have set of rules that you'd like to apply to multiple selections...

```CSS
h1 {
 color: salmon;
}

h2 {
 color: salmon;
}

h3 {
 color: salmon;
}

h4 {
 color: salmon;
}

h5 {
 color: salmon;
}

h6 {
 color: salmon;
}
```

You may find yourself repeating code a lot. Instead of writing multiple blocks that are identical, consider applying a single block to many selections using commas `,`:

```CSS
/* A much cleaner approach! */
h1, h2, h3, h4, h5, h6 {
 color: salmon;
}
```

If there are many more cases where you want to include the code block, however, you may want to consider a re-usable class:

```CSS
.salmon-text {
 color: salmon;
}
```

## Classes versus IDs

What's the difference!? Why wouldn't I just use one of these all the time?

Firstly, we want to be careful not to catch a dangerous web disease like class-itis or id-itis! These are fun names for the practice of causing bloat in your web page by using too many IDs or classes. It makes the code harder, instead of easier, to read at a certain point. Avoid over-using them.

### Classes

Classes are intended to be re-usable. They are **more specific** than selecting an element using an *element selector* alone, making them useful for overwriting a style amongst a crowd of similar ones. The same class can be used many times throughout a web page, making them very flexible. You can even assign multiple classes to the same element—just separate them by spaces in your HTML!

```HTML
<p class="red-text center-text">I'm trying out classes.</p>
<p class="blue-text">Can you tell?</p>
```

```CSS
.center-text {
 text-align: center;
}

.red-text {
 color: red;
}

.blue-text {
 color: blue;
}
```

### IDs

IDs are even more **specific** than classes. That's right, they'll win in a fight! However it is important to note that all IDs in your HTML must be unique to be considered valid—this means you can only use an ID once in each web page, making them far more restrictive. You also can only set one ID per element. Sometimes breaking these rules *seem* like they work in browsers, but that is some browsers just being polite. Especially once we get into front-end JavaScript, you'll find more and more often repeating IDs is bad news!

## Getting Elements to Appear Side-by-Side

You'll notice with `inline` elements, we only really get characters side-by-side... and with `block` elements, we get elements stacked vertically one after the other. When browsing the web, we see plenty of sites where things seem more... side-by-side! How does that work?

### Images in Content

In many web pages, especially blog articles, you'll find there seem to be images along either side of the page with text *wrapping* around them. To have an image slide to the left side of the element and allow text to wrap around it, apply `float: left;` on the image. To have it slide to the right side of its parent instead, use `float: right;`.

```HTML
<p>
 <img src="img/your-image.png">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum. In cursus turpis massa tincidunt dui ut ornare lectus sit. Interdum velit euismod in pellentesque massa. Orci sagittis eu volutpat odio facilisis mauris sit amet. Fusce ut placerat orci nulla pellentesque dignissim enim. Orci sagittis eu volutpat odio facilisis mauris. Viverra justo nec ultrices dui sapien. Est pellentesque elit ullamcorper dignissim. Massa enim nec dui nunc mattis enim ut tellus. Sed enim ut sem viverra aliquet eget sit amet. At urna condimentum mattis pellentesque id nibh tortor.
 Faucibus turpis in eu mi. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Velit scelerisque in dictum non consectetur a erat. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Diam ut venenatis tellus in metus. Curabitur vitae nunc sed velit dignissim sodales ut. Placerat vestibulum lectus mauris ultrices eros in cursus. Nisi est sit amet facilisis magna etiam tempor orci eu. Adipiscing diam donec adipiscing tristique risus. Magna etiam tempor orci eu lobortis elementum nibh. Convallis convallis tellus id interdum velit laoreet id donec ultrices. In est ante in nibh mauris.
 Leo a diam sollicitudin tempor id eu. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Sodales neque sodales ut etiam sit amet. Sem fringilla ut morbi tincidunt augue interdum velit. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Ut ornare lectus sit amet. Morbi tincidunt augue interdum velit euismod. Consequat interdum varius sit amet mattis vulputate enim. Viverra maecenas accumsan lacus vel facilisis volutpat. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Ut sem nulla pharetra diam.
 Habitant morbi tristique senectus et netus et malesuada. Et egestas quis ipsum suspendisse ultrices gravida. Sit amet dictum sit amet justo. Aliquam sem et tortor consequat id porta nibh venenatis cras. Potenti nullam ac tortor vitae purus. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Donec ultrices tincidunt arcu non sodales. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Metus dictum at tempor commodo ullamcorper a. Fringilla urna porttitor rhoncus dolor purus non enim. Eget gravida cum sociis natoque. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Egestas integer eget aliquet nibh praesent tristique magna. Vulputate ut pharetra sit amet aliquam id diam.
 Dictumst quisque sagittis purus sit. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Odio eu feugiat pretium nibh ipsum consequat nisl. Arcu vitae elementum curabitur vitae nunc sed velit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Elementum pulvinar etiam non quam lacus suspendisse. Nunc consequat interdum varius sit amet mattis vulputate enim. Urna et pharetra pharetra massa massa ultricies mi. Egestas sed sed risus pretium quam vulputate. In hac habitasse platea dictumst. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. 
</p>
```

```CSS
img {
 width: 200px;
 height: auto;
 float: right; /* Image "floats" this direction, allowing text to wrap around it. */
}
```

Awesome! But what if we want our big block elements side-by-side!?

### What About the Rest?

Over the years, there have been many approaches, the older of which include `table`s, `float`ing tricks, `inline-block` elements, use of `position`, and more. While each of the properties involved in these old tricks have real purposes and use-cases, we no longer tend to favour them for simply placing elements side-by-side, as there are newer ways to do this!

The modern way to achieve this is by use of CSS3's [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) or [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) features. Either (or both) of these can be used to build amazing and complex layouts! Getting started with either can be a little tricky, but there are amazing guides and cheat sheets out there to help you along your way.

Let's look at a common use of flexbox to make a simple navigation layout. Remember, we want to be semantic in our approach on the HTML side, yet be mindful that we can visually alter things if we're careful about how we write our CSS.

#### Getting Started with Flexbox

Alright, how do we write a navigation bar? We'll need links... maybe something like...

```HTML
<a href="#placeholder">Home</a>
<a href="#placeholder">About</a>
<a href="#placeholder">Our Team</a>
<a href="#placeholder">Services</a>
<a href="#placeholder">Contact</a>
```

Okay, so those are anchors / links. But is there a way to make this more... navigation-y? Do a search, what do you find for elements? Hopefully you came across: the `<nav>` element! Semantic HTML is important for a lot more than bragging. It also makes it a lot easier for search engines to understand your website, improving your rankings! Even more important that that though, is increasing your website's compatibility with accessibility tools. If you're unfamiliar, accessibility tools include software (or hardware) like screen-readers, providing those with disabilities or hurdles with technology to more easily engage with content. Be inclusive!

Okay, so maybe...

```HTML
<nav>
 <a href="#placeholder">Home</a>
 <a href="#placeholder">About</a>
 <a href="#placeholder">Our Team</a>
 <a href="#placeholder">Services</a>
 <a href="#placeholder">Contact</a>
</nav>
```

Is that better? Well, it is, but perhaps we can do even better. Screen readers and search engines would benefit from understanding what this navigation is for (consider a website with a main navigation, footer links, a sidebar featuring categories of the blog, etc.) Try to add headings where you can to describe content in each portion:

```HTML
<nav>
 <h2>Main Web Site Navigation</h2>
 <a href="#placeholder">Home</a>
 <a href="#placeholder">About</a>
 <a href="#placeholder">Our Team</a>
 <a href="#placeholder">Services</a>
 <a href="#placeholder">Contact</a>
</nav>
```

Phew... okay, now that has to be the best it can be, right!? RIGHT!?

Loose anchors (`<a>`) should set off little alarms in your head, after spending some time with HTML. These are little inline elements meant to exist in a larger context. Sure, they are in a `<nav>`, but right now they're on the same level as a `block` element: `<h1>`. While not always necessarily a concern, this should be viewed as a little awkward.

Fine, fine, so we'll throw the `<a>`s in a `<p>`, now are we happy?

```HTML
<nav>
 <h2>Main Web Site Navigation</h2>
 <p>
 <a href="#placeholder">Home</a>
 <a href="#placeholder">About</a>
 <a href="#placeholder">Our Team</a>
 <a href="#placeholder">Services</a>
 <a href="#placeholder">Contact</a>
 </p>
</nav>
```

Well, think about the content. Every time we sit down to write HTML we should be trying our best to write the most descriptive and accessible code we can. Are these anchors one or more sentences, like a `<p>` suggests? What *is* this content? A **list** of links... a... oh, there it is. A ***list***.

So, perhaps a more semantic way of writing this is:

```HTML
<nav>
 <h2>Main Web Site Navigation</h2>
 <ul>
 <li>
 <a href="#placeholder">Home</a>
 </li>
 <li>
 <a href="#placeholder">About</a>
 </li>
 <li>
 <a href="#placeholder">Our Team</a>
 </li>
 <li>
 <a href="#placeholder">Services</a>
 </li>
 <li>
 <a href="#placeholder">Contact</a>
 </li>
 </ul>
</nav>
```

That's the ticket! Now, this isn't necessarily the absolute best or only way to write a navigation... but you should always be wondering and researching the best approach(es) for your HTML!

Now that we have figured out what we want our HTML to look like, we can start thinking about our CSS. What do we want our navigation to look like? Well, many websites have a "bar" of links going across the top of the page. Let's see if we can mimic that sort of layout using flexbox.

### Things to keep in mind when using Flexbox

It helps to make a sort of checklist, following [a clear guide like the one found on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Flexbox introduces a new `display` property value that we'll be making use of: `flex`. This should be set on a parent to the elements you'd like to manipulate.

In our example, this would mean the `<ul>`, if we want the `<li>` elements to be side-by-side.

Next, you'll decide on the `flex-direction`, often either `row` or `column`. In this case, we'll want `row`, as it will place element side-by-side *horizontally*.

Do we want elements to spill to a new line if they run out of room? This behaviour is called *wrapping*. For our navigation, lets say we want it to always be on one line (no wrapping!)

To disable wrapping in this flex container, we'll set `flex-wrap: nowrap;`.

Next up is alignment. For a navigation, this could vary! Let's try out different options. Firstly is the main axis alignment (for a row, this is left-to-right spacing.) Try various values for the `justify-content` property:

* `flex-start`
* `center`
* `flex-end`
* `space-between`
* `space-around`
* `space-evenly`

Pick your favourite!

To adjust spacing between each item, use the `gap` property.

Given the above thought process and steps, you may end up with styles like this:

```CSS
ul {
 list-style: none; /* Remove bullets from the list. */
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
 justify-content: flex-start;
 gap: 8px;
}
```

Congratulations, your first flexbox layout! [See what else flexbox is capable of by searching around and perusing examples]((https://www.sketchingwithcss.com/samplechapter/cheatsheet.html))!

## Resources

To get started with selecting elements, consider reviewing "[Beginner Concepts: How CSS Selectors Work](https://css-tricks.com/how-css-selectors-work/)" and "[Useful :nth-child Recipes](https://css-tricks.com/useful-nth-child-recipies/)."

* [MDN Web Docs: CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [CSS Tricks](https://css-tricks.com/)
    * [Selectors](https://css-tricks.com/almanac/selectors/)
    * [Properties](https://css-tricks.com/almanac/properties/)
    * [Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
    * [Strategies for Keeping CSS Specificity Low](https://css-tricks.com/strategies-keeping-css-specificity-low/)
    * [How to Get Started in Web Design](https://css-tricks.com/get-started-web-design/)
    * [A Nerd's Guide to Color on the Web](https://css-tricks.com/nerds-guide-color-web/)
    * [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    * [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
    * Media Queries (Responsive Web Design)
    * [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
    * [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
    * Learning CSS Grid
    * [Getting Started with CSS Grid](https://css-tricks.com/getting-started-css-grid/)
    * [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
    * [A Complete Guide to the Table Element](https://css-tricks.com/complete-guide-table-element/)
    * [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
* [W3Schools HTML Tutorial](https://www.w3schools.com/html/default.asp)
    * [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
    * [HTML Attributes](https://www.w3schools.com/html/html_attributes.asp)
    * [HTML class Attribute](https://www.w3schools.com/html/html_classes.asp)
    * [HTML id Attribute](https://www.w3schools.com/html/html_id.asp)
    * [HTML Links](https://www.w3schools.com/html/html_links.asp)
    * [HTML Block and Inline Elements](https://www.w3schools.com/html/html_blocks.asp)
    * [HTML Tables](https://www.w3schools.com/html/html_tables.asp)
    * [HTML Lists](https://www.w3schools.com/html/html_lists.asp)
* [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp)
    * [CSS Syntax](https://www.w3schools.com/css/css_syntax.asp)
    * [CSS Selectors](https://www.w3schools.com/css/css_selectors.asp)
    * [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
    * [CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)
    * [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
    * [CSS Grid](https://www.w3schools.com/css/css_grid.asp)
* Beating Browser Default Styles
    * [CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
    * [Normalize.css](https://necolas.github.io/normalize.css/)
* Know your Tools
    * [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/css/)
    * [Firefox Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
    * Visual Studio Code
    * [Basics](https://code.visualstudio.com/docs/introvideos/basics)
    * [Key Bindings](https://code.visualstudio.com/docs/getstarted/keybindings)
* [Can I use...](https://caniuse.com/)
* Validate your Code
    * [W3C [HTML] Markup Validation Service](https://validator.w3.org/#validate_by_input)
    * [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input)
* CSS Learning Games
    * [CSS Diner](https://flukeout.github.io/)
    * [Flexbox Froggy](https://flexboxfroggy.com/)
    * [Grid Garden](https://cssgridgarden.com/)
* CSS Examples and Inspiration
    * [CodePen](https://codepen.io/)
    * [Awwwards](https://www.awwwards.com/)
* [The Ultimate Flexbox Cheat Sheet](https://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
* [Smashing Magazine: CSS](https://www.smashingmagazine.com/category/css)
* CSS Style Guide (consistent way to organize and name your styles)
    * [SMACSS (Scalable and Modular Architecture for CSS)](http://smacss.com/)
* [Book: O'Reilly, CSS: The Definitive Guide, 4th Edition](https://www.oreilly.com/library/view/css-the-definitive/9781449325053/)
