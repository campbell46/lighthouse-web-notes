# Lighthouse Labs | Ajax

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-ajax/tree/2022.11.15-web-flex-day-19sept2022) | [Vimeo Video Recording](https://vimeo.com/771305033/69debe4be2)

* [X] What is Ajax?
* [X] Using Ajax
    * [X] Vanilla
    * [X] jQuery

## How can we use Ajax?

* Vanilla:
    * `XMLHttpRequest`
    * `fetch()`
* Libraries:
    * `jQuery.ajax()`
    * `axios`

## AJAX Basics

The goal and primary benefit of including [AJAX](https://en.wikipedia.org/wiki/Ajax_%28programming%29) in a project is the ability to make requests to one or more servers after the intiial document load. This is incredibly useful in modern web pages as there are thousands, if not millions, of APIs available for us to make requests to. We can even write our own servers capable of sending responses to front-end scripts.

### Single-Page Applications

Consider a web site like Twitter or Facebook. You load up the main page, you're signed-in, and you'd like to browse some of the latest posts. How do you go about that?

Now, on a smaller or simpler web site, you might have a basic set of navigation links you might click on to visit the various pages. Each page is a fresh request and full document load for the browser.

But these are Facebook and Twitter! They have billions (probably way more than that) of posts and profiles... we can't very well expect people to load each and every post in their feed one-at-a-time in separate documents, can we?

We needed a better way... and AJAX is that solution. After a web page loads, it is possible for the front-end JavaScript to make additional requests.

As you scroll down your Facebook "News Feed," or Twitter "Recent Activity" feed, etc. you'll find that new posts load in. The more you scroll, the more seem to keep appearing... Without AJAX, the page would have had to load all of this content in the initial HTML. **With** AJAX, JavaScript is able to send requests to the server for more post-data as you scroll.

Once the script receives that new information from the server at Facebook or Twitter, it is able to format and inject that data into the web page in a more human-friendly interface (HTML, CSS, etc.)

This is the power of AJAX, and why it is so popular. It allows for us as web developers to offer a far more seamless and responsive experience to our end-users, allowing them to browse content without requiring them to load subsequent web pages.

It opened a lot of doors when it was introduced circa 1999, and has evolved a lot since then, too. It began in Internet Explorer, boot was soon enough implemented in the competing browsers, gaining a true foothold as a common practice in around 2005.

In its early form, it was implemented as most browsers' XMLHttpRequest API. This is still available if you prefer to write AJAX requests the old-fashioned way! The newer implementation available on most modern web browsers is the Fetch API, which is promise-based and more compatible with modern practices.

### Terms

[AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX): Asynchronous JavaScript and XML

* [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [`jQuery.ajax()`](https://api.jquery.com/Jquery.ajax/)
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Axios](https://axios-http.com/)

[XML](https://developer.mozilla.org/en-US/docs/Web/XML): eXtensible Markup Language

[SGML](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language): Standard Generalized Markup Language

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): HyperText Markup Language

[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS): Cross-Origin Resource Sharing

## CORS

The browser will carefully read headers in-coming from the server, and use CORS definitions to decide which subsequent requests are safe or not. By default, most (if not all) traffic is expected to be coming from the domain you initially requested the web page from. Because this is a browser feature, there are extensions that can override this, which are tempting to try out. Keep in mind without such protections, your browsing on the web is prone to attacks! It is best to only disable or alter features like this with intention and in a controlled development environment.

## Pros and Cons of AJAX

### Pros

* Smaller requests are faster (improved response times)
* Snappier user experience (no page reload)
* Less URLs to click through, more dynamic
* Async allows for multiple requests to queue at once
* Reduces server load (the client can format and display the response)

### Cons

* It can be trickier / require more planning to implement
* We have to use an Async mindset
* You have to know, or experiment, to understand the format of the response data
* History is not updated on its own
* Method of Ajax may matter for backwards compatibility purposes

## Forms in HTML

Consider the following form:

```HTML
<form method="POST" action="/users">
  <label for="email-address-field">E-Mail Address:</label>
  <input type="text" name="email" id="email-address-field">
  <label for="password-field">Password:</label>
  <input type="password" name="password" id="password-field">
  <input type="submit" value="Submit">
</form>
```

By default, most web browsers are capable of handling submission of that form. A `POST` request would be made to the `/users` URL under the current domain. This would result in a brand-new page-load, your browser waiting for a response from the server.

### Forms in JavaScript

```JavaScript
'use strict'; // Strict JS syntax.

// Find the form element in our DOM.
const myForm = document.querySelector('form');

// "Listen," or wait, for submission of the form.
myForm.addEventListener('submit', function(event) {
  // Stop the form from submitting and loading a new page.
  event.preventDefault();

  console.log('Attempted form submission!');
});
```

We can use JavaScript to intercept a form submission. Instead of letting the browser submit the form via the defined method and request an entire new page, we can have JavaScript prevent that default action. Once prevented, we can read form input values and use AJAX to interact with the server without having to re-load anything.

One of the real strengths of AJAX is this ability to send form (or other) data and receive a response without an additional page loading in. With response data, we are free to parse it and decide if we want to, or need to, update any of the content in the web page in real-time.

#### Getting Info from the Form

Inside of the event listener we can access the field information. There is a variety of ways we can gather information from our form fields. If the form fields have IDs, we can use the `document.getElementById()` method, passing just the name of the ID on the element. This will give us access to the element. See the following addition to our script:

```JavaScript
'use strict'; // Strict JS syntax.

// Find the form element in our DOM.
const myForm = document.querySelector('form');

// "Listen," or wait, for submission of the form.
myForm.addEventListener('submit', function(event) {
  // Stop the form from submitting and loading a new page.
  event.preventDefault();

  console.log('Attempted form submission!');

  // Retrieve field values.
  const email = document.getElementById('email-address-field').value;
  const password = document.getElementById('password-field').value;
});
```

Now we have access to the field values. If we wanted to submit this data, we'd be able to include it in the body of an AJAX request or have the form submit in the traditional way.

Using vanilla JavaScript, we can submit AJAX requests (asynchronous requests that do not cause a page load) with info like this, or more simple requests without additional info. As an example (this URL is not real) you might submit something like this using the `fetch` API:

```JavaScript
'use strict'; // Strict JS syntax.

// Find the form element in our DOM.
const myForm = document.querySelector('form');

// "Listen," or wait, for submission of the form.
myForm.addEventListener('submit', function(event) {
  // Stop the form from submitting and loading a new page.
  event.preventDefault();

  console.log('Attempted form submission!');

  // Retrieve field values.
  const email = document.getElementById('email-address-field').value;
  const password = document.getElementById('password-field').value;

  // Make your AJAX request.
  fetch('https://example.com/sign-in', {
      headers: {
          'Content-Type:': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({email, password})
  })
  // Convert the response to valid JavaScript.
  .then(response => response.json())
  // Process data (just printing to console in this example.)
  .then(data => console.log(data))
  // Catch any errors (if they occur.)
  .catch(error => console.error(error));
});
```

The above is the `fetch` API syntax for AJAX requests. Note that if you need to support older browsers, you'll likely have better luck with the `XMLHttpRequest` API syntax or by using a library like `jQuery` that has cross-platform and backwards-compatibility in their design focus.

Now that we've seen the concepts in vanilla JS in this pretend website sample, let's try accessing data from a real API using jQuery.

## jQuery and AJAX

[jQuery](https://jquery.com/) is a JavaScript library built to make your time writing front-end scripts a bit easier. It boasts quite backwards-compatible code, easy DOM traversal and editing, and an exceptionally documented API. Among its features is a method that is very relevant to today's topic: [`jQuery.ajax()`](https://api.jquery.com/Jquery.ajax/)

### Installing jQuery

The ol' fashioned way of installing jQuery involves [visiting their official website, and downloading the source code](https://jquery.com/download/). Usually you'll want the compressed version of their software (unless you plan on reading or adding to the source at all.) 

Once you've downloaded the [latest version of jQuery](https://code.jquery.com/jquery-3.6.0.min.js), most will include it in a `/vendor/` directory in their project. A vendor directory is a reminder that these are scripts (or styles, assets, etc.) that were provided by a third-party, that you didn't write yourself. In a team environment this is especially helpful and communicates very clearly to other members of the team where this code comes from. As an additional consideration, it is good practice to include a comment of some kind in the source code of these additional scripts and assets that links back to where they came from.

Don't forget to include a `<script>` element in your HTML files or outputs that points to this source file, or you won't have access to its features in your own scripts!

Of course, you have `npm` installed, so [as an alternative option you could run `npm install jquery`](https://jquery.com/download/#downloading-jquery-using-npm-or-yarn) instead. This would populate your project's `/node_modules/` directory with the necessary files. You will still have to include  a `<script>` element with a `src` attribute describing the location of the script you want included in your web page.

### Using jQuery.ajax()

The `fetch` API included in modern web browsers follows the [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) syntax. In contrast, jQuery uses its own set of methods, it is best to format your requests [the way they suggest in their documentation](https://api.jquery.com/Jquery.ajax/).

A simple request might look like so:

```JavaScript
// Ensure the web page is loaded:
$(document).ready(() => {
    $.ajax({
        // Target URL:
        url: 'https://ghibliapi.herokuapp.com/films/',
        // If successful, process the response:
        success: response => {
            let outputHTML = '<ul>';
            response.forEach(movie => outputHTML += `<li>${movie.title} (${movie.original_title})</li>`);
            outputString += '</ul>';
            $(document.body).append(outputHTML);
        },
        // If an error occurred, log the issue:
        error: error => {
            console.error(`Error Encountered: ${error.status} - ${error.statusText}`);
        }
    });
});
```

## Resources

* [jQuery.ajax()](https://api.jquery.com/Jquery.ajax/) / [W3Schools: jQuery ajax() Method](https://www.w3schools.com/jquery/ajax_ajax.asp)
* [W3Schools: JavaScript Fetch API](https://www.w3schools.com/js/js_api_fetch.asp) / [MDN: Using the fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [W3Schools: AJAX Introduction](https://www.w3schools.com/xml/ajax_intro.asp) / [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [W3Schools: JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) /  [MDN: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
