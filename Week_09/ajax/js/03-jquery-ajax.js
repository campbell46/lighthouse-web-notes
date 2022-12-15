console.log('03-jquery-ajax.js running!'); // File running!

console.log($); // jQuery available!

// Get the button.
const $jqueryFoxButton = $('#jquery-fox-button');
console.log($jqueryFoxButton);

// Listen for click.
$jqueryFoxButton.on('click', (event) => {
    // const $thisButton = $(event.target);

    console.log('$jqueryFoxButton was clicked!');

    // Retrieve fox picture.
    $.ajax({
        url: 'https://randomfox.ca/floof/',
        success: (fox) => {
            console.log(fox);

            // Display fox picture.
            $jqueryFoxButton.after(
                `<img src="${fox.image}">`
            );
        },
        error: (error) => { console.error(error); }
    });
});
