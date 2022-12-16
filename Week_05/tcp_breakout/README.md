# Lighthouse Labs | TCP Breakout

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-tcp-breakout/tree/2022.10.20-web-flex-19sept2020) | [Vimeo Video](https://vimeo.com/762458236/55f8e7336f)

## Running this Example

To try out this project, run:

1. `node server.js`
2. `node client.js`

The client can submit `yes` or `no` to vote on the questions received.

## Today's Goal!

Goal: **Question App** (server asks... client says `yes` or `no` to vote!)

Looking for your next challenge? See if you can use the `HTTP` module to retrieve new questions from [The Trivia API](https://the-trivia-api.com/). Now, use your knowledge of the `net` module to make a game where connected clients answer a question, and keep track of their scores!

## TCP Information

[TCP stands for Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)!

* (Relatively) large header size
* It requires a formal, ongoing connection
* Corrupted packets are reported to the server, bad data can be re-sent
* Packets arrive in-order
* Useful especially for guaranteed communication is required

## Resources

* [Wikipedia: Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)
  * [Client-Server Model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)
  * [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
* [ngrok: Getting Started](https://ngrok.com/docs/getting-started)
* [NodeJS `net` Module](https://nodejs.org/api/net.html#net)
* [NodeJS: How do I create a HTTP server?](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/)
  * [The Node.js `http` module](https://nodejs.dev/learn/the-nodejs-http-module)
* [Complex Requests using CURL in your Terminal](http://curl.haxx.se/docs/httpscripting.html)
* [Postman: an HTTP Client (for HTML; JSON; XML and more!)](http://getpostman.com/)
