# Lighthouse Labs | CRUD with Express

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-crud-with-express/tree/2022.11.24-web-flex-day-17oct2022) | [Vimeo Vimeo Recording](https://vimeo.com/774871441/7b008d8c29)

* [X] Express
* [X] Routes
* [X] CRUD
* [X] EJS Templates

## Express! What is it good for!?

Framework for node.js apps to more easily accept HTTP Requests, and return HTTP responses. Simplifying the process of creating an HTTP server.

## CRUD

Any time we are working with resources on a web server...

* CREATE (New Resource Form + Save)
* READ   (Index + Show)
* UPDATE (Edit Form + Update)
* DELETE

## Data

```
Resource: PET(S)

{name: 'Quorra', age: 1, type: 'dog'},
{name: 'Marie', age: 3, type: 'cat'},
{name: 'Stanley', age: 4, type: 'cat'}
{name: 'Milly', age: 4, type: 'dog'}
{name: 'Tobi', age: 2, type: 'dog'}
```

## Routes!

Routes are essentially different paths, with specific intended methods (verbs GET / POST) that the client can interact with.

```
CRUD      METHOD      PATH

CREATE    GET         /pets/new        # Display NEW PET form
CREATE    POST        /pets            # NEW PET form submission
READ      GET         /pets            # Display all pets (index)
READ      GET         /pets/:id        # Display specific pet (show)
UPDATE    GET         /pets/:id/edit   # Display EDIT PET form
UPDATE    POST        /pets/:id        # EDIT PET form submission
DELETE    POST        /pets/:id/delete # DELETE specific pet
```

## EJS (Embedded JavaScript)

* Helps us format HTML strings
* You can sprinkle bits of JS logic in EJS files
* EJS is back-end, and helps us format a string BEFORE it is sent to the browser
* EJS does NOT run in a browser, and must be run in a back-end only
* Separation of concerns

## GET vs. POST Forms

### GET

* Is able to send a request with query parameters (right in the URL / address bar)
* Easy to share / reproduce
* Great for searches and reaching resources consistently

`myblog.com?id=3`

OR

```HTML
<form method="GET" action="https://google.com/search">
    <input name="q">
```

`https://google.com/search?q=query+parameter+strings`

### POST

* Not easily bookmarkable / reproducable
* Does not show submission values in address bar / URL
* Great for sign-ins, edits, etc. -> actions you don't want as easily repeated or visible

```HTML
<form method="POST" action="https://site.com/sign-in">
    <input name="user">
    <input name="pass">
```

## Resources

* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://expressjs.com/)
* [EJS](https://ejs.co/#install)
* [`body-parser`](https://www.npmjs.com/package/body-parser)
* [Morgan](https://expressjs.com/en/resources/middleware/morgan.html)
* [Nodemon](https://github.com/remy/nodemon#nodemon)
