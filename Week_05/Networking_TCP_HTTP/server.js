const net = require('net');
const PORT = 6200;

const server = net.createServer();
// console.log(server);

server.listen(PORT, () => {
  console.log('TCP Server running on port:', PORT);
});

const allConnections = [];

server.on('connection', (connection) => {
  console.log('A client has connected!');

  connection.setEncoding('utf-8');
  connection.write('You have connected to the server successfully!');

  connection.on('error', () => {
    console.log('Connection error.');
  });

  connection.on('data', (userInput) => {
    userInput = userInput.trim();
    console.log(userInput);

    if (userInput.startsWith('name: ')) {
      const name = userInput.split(' ')[1];
      return connection.username = name;
    }

    for (const conn of allConnections) {
      if (conn !== connection) {
        const name = connection.username ? connection.username : 'Guest';
        conn.write(`${name}: ${userInput}`);
      }
    }
  });

  allConnections.push(connection);
});