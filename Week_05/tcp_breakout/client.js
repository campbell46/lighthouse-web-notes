const net = require('net');

const config = {
    host: 'localhost',
    port: 5000
    // host: '4.tcp.ngrok.io', // 127.0.0.1
    // port: 18306
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (data) => {
    console.log(data);
});

process.stdin.on('data', (data) => {
    data = String(data).trim();
    client.write(data);
});
