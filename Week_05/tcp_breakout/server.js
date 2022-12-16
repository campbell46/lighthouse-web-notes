const net = require('net');

const server = net.createServer();
const PORT = 5000;

server.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});

const questions = [
    {
        text: 'Do you like JavaScript?',
        yes: 0,
        no: 0
    },
    {
        text: 'Do you like Jazz?',
        yes: 0,
        no: 0
    },
    {
        text: 'Do you like GitHub?',
        yes: 0,
        no: 0
    },
];

server.on('connection', (connection) => {
    console.log('A client has connected.');
    connection.setEncoding('utf-8');

    // Set default question
    connection.currentQuestion = 0; // Array index 0
    // Send first question
    connection.write(questions[0].text);

    // Wait for data!
    connection.on('data', (data) => {
        const answer = String(data).trim().toLowerCase();
        console.log('data received:', answer);

        if (typeof questions[connection.currentQuestion] !== 'undefined') {
            if (answer === 'yes') {
                questions[connection.currentQuestion].yes++;
                connection.currentQuestion++;
            } else if (answer === 'no') {
                questions[connection.currentQuestion].no++;
                connection.currentQuestion++;
            } else {
                connection.write('Invalid answer, please type "yes" or "no".');
            }
            if (typeof questions[connection.currentQuestion] !== 'undefined') {
                connection.write(questions[connection.currentQuestion].text);
            } else {
                connection.write('Awesome, you\'re done!');
            }
        } else {
            connection.write('That\'s all of our questions, thank you!');
        }
      
        console.log('Latest Vote Count:', questions);
    });
});
