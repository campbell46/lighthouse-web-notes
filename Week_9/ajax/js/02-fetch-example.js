console.log('02-fetch-example.js running!');

// Retrieve the button!
const foxButton = document.getElementById('fox-button');
console.log(foxButton);

// Listen for a click!
foxButton.addEventListener('click', () => {
    console.log('foxButton was clicked!');
    // Run our AJAX
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            // Display the Fox
            const img = document.createElement('img');
            img.src = data.image;
            document.body.appendChild(img);
        });
});
